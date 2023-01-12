import Log from "/utility/models/Log";
import dbConnect from "/utility/dbConnect";
dbConnect();
export default async function handler(req, res) {
  const { method } = req;

  const { id } = req.query;

  const body = req.body;

  switch (method) {
    case "GET":
      // Return Log with ID
      try {
        const log = await Log.findById(id);
        res.status(200).json(log);
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "POST":
      // Create new Log with ID
      try {
        const newLog = await Log.create(JSON.parse(body));
        res.status(200).json(newLog);
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "PUT":
      // Update Log with ID or Create one if not exist
      try {
        const exists = await Log.exists({ _id: id });
        if (!exists) {
          const newLog = await Log.create(JSON.parse(body));
          res.status(200).json(newLog);
        }
        const updatedLog = await Log.findByIdAndUpdate(id, body);
        res.status(200).json(updatedLog);
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "PATCH":
      // Update Log with ID
      try {
        console.log(body)
        const updatedLog = await Log.findByIdAndUpdate(id, JSON.parse(body));
        res.status(200).json(updatedLog);
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
    case "DELETE":
      // Delete Log
      try {
        const deletedLog = await Log.findByIdAndDelete(id);
        res.status(200).json(updatedLog);
      } catch (e) {
        res.status(400).json({ error: e });
      }
      break;
  }
}
