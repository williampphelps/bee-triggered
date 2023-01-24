import Machine from "/utility/models/Machine";
import dbConnect from "/utility/dbConnect";
dbConnect();
export default async function handler(req, res) {
  const { method } = req;

  const { id } = req.query;

  const body = req.body;

  switch (method) {
    case "GET":
      // Return Machine with ID
      try {
        const machine = await Machine.findById(id);
        res.status(200).json(machine);
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "POST":
      // Create new Machine with ID
      try {
        const newMachine = await Machine.create(JSON.parse(body));
        res.status(200).json(newMachine);
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "PUT":
      // Update Machine with ID or Create one if not exist
      try {
        const exists = await Machine.exists({ _id: id });
        if (!exists) {
          const newMachine = await Machine.create(JSON.parse(body));
          res.status(200).json(newMachine);
        }
        const updatedMachine = await Machine.findByIdAndUpdate(id, body);
        res.status(200).json(updatedMachine);
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "PATCH":
      // Update Machine with ID
      try {
        console.log(body)
        const updatedMachine = await Machine.findByIdAndUpdate(id, JSON.parse(body));
        res.status(200).json(updatedMachine);
      } catch (e) {
        console.log(e)
        res.status(400).json({ error: e });
      }
      break;
    case "DELETE":
      // Delete Machine
      try {
        const deletedMachine = await Machine.findByIdAndDelete(id);
        res.status(200).json(updatedMachine);
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
  }
}
