import Log from "/utility/models/Log";
import dbConnect from "/utility/dbConnect";
dbConnect();
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const logs = await Log.find({}, null, { sort: { local_time: -1 } });
        res.status(200).json(logs);
      } catch (e) {
        console.log(e);
        res.status(400).json({ message: e });
      }
      break;
    case "POST":
      try {
        let message = JSON.parse(req.body.message);

        message.status = 'unread';

        if (message.logtype >= 2000) {
          const newLog = await Log.create(message);
        }
        res.status(200).json({ message: "ok" });
      } catch (e) {
        console.log(e);
        res.status(200).json({ message: "not ok" });
      }
      break;
  }
}
