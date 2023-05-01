import AlertHandler from '/utility/models/AlertHandler';

export default async function handler(req, res) {

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const alerthandlers = await AlertHandler.find({});
        res.status(200).json(alerthandlers);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
      }
      break;
    case 'POST':
      try {
        const newalerthandler = await AlertHandler.create(req.body);
        res.status(201).json(newalerthandler);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
      }
      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
  }

}
