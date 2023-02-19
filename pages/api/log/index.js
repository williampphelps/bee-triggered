import Log from "/utility/models/Log";
import Key from '/utility/models/Key';
import bcrypt from 'bcrypt';
import dbConnect from "/utility/dbConnect";

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
      try {

        if (session) {
          const logs = await Log.find({}, null, { sort: { local_time: -1 } });
          res.status(200).json(logs);
          return
        }

        if (PUBLIC_KEY && SECRET_KEY) {
          const apiKeyValid = await checkApiKeys(PUBLIC_KEY, SECRET_KEY);
          if (apiKeyValid) {
            if (apiKeyValid && apiKeyValid.logs.permission != "none") {
              const logs = await Log.find({}, null, { sort: { local_time: -1 } });
              res.status(200).json(logs);
              return
            }
          }
        }

        res.status(401).json({ message: 'Access Denied!' });
      } catch (e) {
        console.log(e);
        res.status(400).json({ message: e });
      }
      break;
    case "POST":
      try {
        
        if (session) {

          let messageType = typeof(req.body.message);

          let message = messageType == "string" ? JSON.parse(req.body.message) : req.body.message;

          message.status = 'unread';

          if (message.logtype >= 2000) {
            const newLog = await Log.create(message);
          }
          res.status(200).json({ message: "ok" });
          return
        }

        if (PUBLIC_KEY && SECRET_KEY) {
          const apiKeyValid = await checkApiKeys(PUBLIC_KEY, SECRET_KEY);
          if (apiKeyValid) {
            if (apiKeyValid && apiKeyValid.logs.permission == "create") {
              let messageType = typeof(req.body.message);

              let message = messageType == "string" ? JSON.parse(req.body.message) : req.body.message;

              message.status = 'unread';

              if (message.logtype >= 2000) {
                const newLog = await Log.create(message);
                console.log('Log Created!')
              }
              res.status(200).json({ message: "ok" });
              return
            }
          }
        }

        res.status(401).json({ message: 'Access Denied!' });

      } catch (e) {
        console.log(e);
        res.status(200).json({ message: "not ok" });
      }
      break;
  }
}
