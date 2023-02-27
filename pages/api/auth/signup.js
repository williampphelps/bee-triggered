import User from "../../../utility/models/User";
import dbConnect from "../../../utility/dbConnect";
import bcrypt from "bcrypt";
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '/pages/api/auth/[...nextauth]';
dbConnect();

const checkApiKeys = async (publicKey, secretKey) => {

  const keypair = await Key.findOne({ public_key: publicKey });

  if (keypair) {
    const match = await bcrypt.compare(secretKey, keypair.secret_key)
    if (match) {
      return keypair.permissions
    }
  }
  return false
}

export default async function handler(req, res) {
  const { method } = req;

  const session = await unstable_getServerSession(req, res, authOptions);

  const PUBLIC_KEY = req.headers['x-bee-public']
  const SECRET_KEY = req.headers['x-bee-secret']

  switch (method) {
    case "GET":
      res.status(405).json({ message: "GET requests not allowed" });
      break;
    case "POST":
      try {
        if (session) {
          let password = req.body.pword;
          bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
              res.status(400).json({
                message: "Something went wrong generating salt for hashing!",
                error: saltError,
              });
            }
            bcrypt.hash(password, salt, async function (hashError, hash) {
              if (hashError) {
                res.status(400).json({
                  message: "Something went wrong hashing password!",
                  error: hashError,
                });
              }
              const newUserObj = {
                full_name: req.body.fname,
                email: req.body.email,
                password: hash,
              };
              const newUser = await User.create(newUserObj);
              res.status(200).json({ message: "User Created!" });
            });
          });
          return;
        }

        if (PUBLIC_KEY && SECRET_KEY) {
          const apiKeyValid = await checkApiKeys(PUBLIC_KEY, SECRET_KEY);
          if (apiKeyValid) {
            if (apiKeyValid && apiKeyValid.users.permission == "create") {
              let password = req.body.pword;
              bcrypt.genSalt(10, function (saltError, salt) {
                if (saltError) {
                  res.status(400).json({
                    message: "Something went wrong generating salt for hashing!",
                    error: saltError,
                  });
                }
                bcrypt.hash(password, salt, async function (hashError, hash) {
                  if (hashError) {
                    res.status(400).json({
                      message: "Something went wrong hashing password!",
                      error: hashError,
                    });
                  }
                  const newUserObj = {
                    full_name: req.body.fname,
                    email: req.body.email,
                    password: hash,
                  };
                  const newUser = await User.create(newUserObj);
                  res.status(200).json({ message: "User Created!" });
                });
              });
              return
            }
          }
        }

        res.status(401).json({ message: 'Access Denied!' });
        
      } catch (err) {
        res.status(400).json({ message: "Something went wrong!", error: err });
      }

      break;
    case "PUT":
      res.status(405).json({ message: "PUT requests not allowed" });
      break;
    case "PATCH":
      res.status(405).json({ message: "PATCH requests not allowed" });
      break;
    case "DELETE":
      res.status(405).json({ message: "Delete requests not allowed" });
      break;
  }
}
