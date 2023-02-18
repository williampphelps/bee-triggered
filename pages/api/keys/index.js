import Key from '/utility/models/Key';
import dbConnect from '/utility/dbConnect';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

dbConnect();

export default async function handler(req, res) {

    const { method } = req;

    if (method == "POST") {

        const API_KEYGEN_PASS = req.headers['x-api-keygen-pass'];

        if (!API_KEYGEN_PASS) {
            res.status(401).json({ message: "Access Denied"})
            return
        }

        if (API_KEYGEN_PASS != process.env.API_KEYGEN_PASS) {
            res.status(401).json({ message: "Access Denied" })
            return
        }

        if (!req.body.permissions) {
            res.status(400).json({ message: "Permissions needed!" })
            return
        }

        const publicKey = "bee_public_" + crypto.randomBytes(24).toString('hex');
        const secretKey = "bee_secret_" + crypto.randomBytes(24).toString('hex');

        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                res.status(400).json({
                    message: "Something went wrong generating salt for hashing!",
                    error: saltError
                });
                return
            }
            bcrypt.hash(secretKey, salt, async function (hashError, hash) {
                if (hashError) {
                    res.status(400).json({
                        message: "Something went wrong hashing secret key!",
                        error: hashError,
                    });
                    return
                }
                try {
                    const newKeyPair = await Key.create({
                        public_key: publicKey,
                        secret_key: hash,
                        permissions: req.body.permissions
                    });
            
                    res.status(200).json({ public_key: publicKey, secret_key: secretKey, key_pair: newKeyPair });
                    return
                } catch (e) {
                    res.status(500).json({ error: e })
                    return
                }
            })
        });

    } else {
        res.status(405).json({ message: "INVALID METHOD: " + method });
        return
    }

}