import User from "../../../utility/models/User";
import dbConnect from "../../../utility/dbConnect";
import bcrypt from "bcrypt";
dbConnect();
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(405).json({ message: "GET requests not allowed" });
      break;
    case "POST":
      try {
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
