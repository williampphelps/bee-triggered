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

  const { id } = req.query;

  const body = req.body;

  const session = await unstable_getServerSession(req, res, authOptions);

  const PUBLIC_KEY = req.headers['x-bee-public']
  const SECRET_KEY = req.headers['x-bee-secret']

  switch (method) {
    case "GET":
      // Return Log with ID
      try {
        if (session) {
          const log = await Log.findById(id);
          res.status(200).json(log);
        }
        
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "POST":
      // Create new Log with ID
      try {
        if (session) {
          const newLog = await Log.create(JSON.parse(body));
          res.status(200).json(newLog);
        }
        
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "PUT":
      // Update Log with ID or Create one if not exist
      try {
        if (session) {
          const exists = await Log.exists({ _id: id });
          if (!exists) {
            const newLog = await Log.create(JSON.parse(body));
            res.status(200).json(newLog);
          }
          const updatedLog = await Log.findByIdAndUpdate(id, body);
          res.status(200).json(updatedLog);
        }
        
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "PATCH":
      // Update Log with ID
      try {
        if (session) {
          console.log(body)
          const updatedLog = await Log.findByIdAndUpdate(id, JSON.parse(body));
          res.status(200).json(updatedLog);
        }
        
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "DELETE":
      // Delete Log
      try {
        if (session) {
          const deletedLog = await Log.findByIdAndDelete(id);
          res.status(200).json(updatedLog);
        }
        
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
  }
}
