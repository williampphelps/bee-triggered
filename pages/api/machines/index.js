import Machine from "/utility/models/Machine";
import Key from '/utility/models/Key';
import bcrypt from 'bcrypt';
import dbConnect from "/utility/dbConnect";
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '/pages/api/auth/[...nextauth]';
dbConnect();

const checkApiKeys = async (publicKey, secretKey, ) => {

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

  const body = req.body;

  const PUBLIC_KEY = req.headers['x-bee-public']
  const SECRET_KEY = req.headers['x-bee-secret']

  switch (method) {
    case "GET":
      // Return Machine with ID
      try {

        if (session) {
          const machines = await Machine.find();
          res.status(200).json(machines);
          return
        }

        if (!PUBLIC_KEY || !SECRET_KEY) {
          res.status(401).json({ message: "Access Denied!" })
          return
        }

        const apiKeyValid = await checkApiKeys(PUBLIC_KEY, SECRET_KEY)

        if (apiKeyValid && apiKeyValid.machines.permission != "none") {
          const machines = await Machine.find();
          res.status(200).json(machines)
        } else {
          res.status(401).json({ message: 'Access Denied!' })
        }
        
      } catch (e) {
        res.status(400).json({ error: e });
        return
      }
      break;
    case "POST":
      // Create new Machine with ID
      try {
        if (session) {
          const newMachine = await Machine.create(body);
          res.status(200).json(newMachine);
        }
        if (!PUBLIC_KEY || !SECRET_KEY) {
          res.status(401).json({ message: 'Access Denied!' });
        }

        const apiKeyValid = await checkApiKeys(PUBLIC_KEY, SECRET_KEY)

        if (apiKeyValid && apiKeyValid.machines.permission == "create") {
          const newMachine = await Machine.create(body);
          res.status(200).json(newMachine);
        } else {
          res.status(401).json({ message: 'Access Denied!' });
        }
        
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "PUT":
      // Update Machine with ID or Create one if not exist
      res.status(405).json({ error: "PUT not allowed" });
      break;
    case "PATCH":
      // Update Machine with ID
      res.status(405).json({ error: "PATCH not allowed" });
      break;
    case "DELETE":
      // Delete Machine
      res.status(405).json({ error: "DELETE not allowed" });
      break;
  }
}
