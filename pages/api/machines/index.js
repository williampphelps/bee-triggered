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
        const machines = await Machine.find();
        res.status(200).json(machines);
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "POST":
      // Create new Machine with ID
      try {
        const newMachine = await Machine.create(body);
        res.status(200).json(newMachine);
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
