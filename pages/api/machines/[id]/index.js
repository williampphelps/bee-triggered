import Machine from "/utility/models/Machine";
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

  const session = await unstable_getServerSession(req, res, authOptions);

  const body = req.body;

  const PUBLIC_KEY = req.headers['x-bee-public']
  const SECRET_KEY = req.headers['x-bee-secret']

  switch (method) {
    case "GET":
      // Return Machine with ID
      try {
        if (session) {
          const machine = await Machine.findById(id);
          res.status(200).json(machine);
          return
        }

        if (PUBLIC_KEY && SECRET_KEY) {
          const apiKeyValid = await checkApiKeys(PUBLIC_KEY, SECRET_KEY);
          if (apiKeyValid) {
            const apiMachines = apiKeyValid.machines.machine_ids;
            const selectedMachine = apiMachines.find(object => object.id == id);
            if (selectedMachine && selectedMachine.permission != "none") {
              const machine = await Machine.findById(id);
              res.status(200).json(machine);
              return
            }
          }
        }

        res.status(401).json({ message: 'Access Denied!' });
        
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "POST":
      // Create new Machine with ID
      try {
        if (session) {
          const newMachine = await Machine.create(JSON.parse(body));
          res.status(200).json(newMachine);
          return
        }

        if (PUBLIC_KEY && SECRET_KEY) {
          const apiKeyValid = await checkApiKeys(PUBLIC_KEY, SECRET_KEY);
          if (apiKeyValid) {
            const apiMachines = apiKeyValid.machines.machine_ids;
            const selectedMachine = apiMachines.find(object => object.id == id);
            if (selectedMachine && selectedMachine.permission == "create") {
              const newMachine = await Machine.create(JSON.parse(body));
              res.status(200).json(newMachine);
              return
            }
          }
        }

        res.status(401).json({ message: 'Access Denied!' });
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "PUT":
      // Update Machine with ID or Create one if not exist
      try {
        


        if (session) {
          const exists = await Machine.exists({ _id: id });
          if (!exists) {
            const newMachine = await Machine.create(JSON.parse(body));
            res.status(200).json(newMachine);
          }
          const updatedMachine = await Machine.findByIdAndUpdate(id, body);
          res.status(200).json(updatedMachine);
          return
        }

        if (PUBLIC_KEY && SECRET_KEY) {
          const apiKeyValid = await checkApiKeys(PUBLIC_KEY, SECRET_KEY);
          if (apiKeyValid) {
            const apiMachines = apiKeyValid.machines.machine_ids;
            const selectedMachine = apiMachines.find(object => object.id == id && object.permission == "edit");
            if (selectedMachine) {
              const exists = await Machine.exists({ _id: id });
              if (!exists) {
                const newMachine = await Machine.create(JSON.parse(body));
                res.status(200).json(newMachine);
              }
              const updatedMachine = await Machine.findByIdAndUpdate(id, body);
              res.status(200).json(updatedMachine);
              return
            }
          }
        }

        res.status(401).json({ message: 'Access Denied!' });
        

      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "PATCH":
      // Update Machine with ID
      try {
        if (session) {
          const updatedMachine = await Machine.findByIdAndUpdate(id, JSON.parse(body));
          res.status(200).json(updatedMachine);
          return
        }

        if (PUBLIC_KEY && SECRET_KEY) {
          const apiKeyValid = await checkApiKeys(PUBLIC_KEY, SECRET_KEY);
          if (apiKeyValid) {
            const apiMachines = apiKeyValid.machines.machine_ids;
            const selectedMachine = apiMachines.find(object => object.id == id && object.permission == "edit");
            if (selectedMachine) {
              const updatedMachine = await Machine.findByIdAndUpdate(id, JSON.parse(body));
              res.status(200).json(updatedMachine);
              return
            }
          }
        }

        res.status(401).json({ message: 'Access Denied!' });

      } catch (e) {
        console.log(e)
        res.status(400).json({ error: e });
      }
      break;
    case "DELETE":
      // Delete Machine
      try {
        if (session) {
          const deletedMachine = await Machine.findByIdAndDelete(id);
          res.status(200).json(deletedMachine);
          return
        }

        if (PUBLIC_KEY && SECRET_KEY) {
          const apiKeyValid = await checkApiKeys(PUBLIC_KEY, SECRET_KEY);
          if (apiKeyValid) {
            const apiMachines = apiKeyValid.machines.machine_ids;
            const selectedMachine = apiMachines.find(object => object.id == id && object.permission == "delete");
            if (selectedMachine) {
              const deletedMachine = await Machine.findByIdAndDelete(id);
              res.status(200).json(deletedMachine);
              return
            }
          }
        }

        res.status(401).json({ message: 'Access Denied!' });
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
  }
}
