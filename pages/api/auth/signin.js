import dbConnect from "../../../utility/dbConnect";
import User from "../../../utility/models/User";
import bcrypt from "bcrypt";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  console.log(method);

  console.log(req.body);

  switch (method) {
    case "GET":
      res.status(405).json({ message: "GET not allowed" });
      break;
    case "POST":
      try {
        console.log(req.body);
        User.findOne({ email: req.body.email }, function (findError, user) {
          if (user) {
            bcrypt.compare(
              req.body.pword,
              user.password,
              function (compareError, result) {
                if (result) {
                  console.log('USER SUCCESS MATCH')
                  res.status(200).json(user);
                } else {
                  console.log('USER INCORRECT USERNAME OR PASSWORD')
                  res
                    .status(400)
                    .json({ error: "Incorrect Username or Password" });
                }
                if (compareError && !result) {
                  console.log("SOMETHING WENT WRONG WHILE COMPARING PASSWORDS!")
                  res.status(400).json({
                    message: "Something went wrong while comparing passwords!",
                    error: compareError,
                  });
                }
              }
            );
          } else {
            res
              .status(400)
              .json({ message: "Something went wrong!", error: findError });
          }
        });
      } catch (err) {
        res.status(400).json({ message: "Something went wrong!" });
      }
      break;
    case "PUT":
      res.status(405).json({ message: "PUT not allowed" });
      break;
    case "PATCH":
      res.status(405).json({ message: "PATCH not allowed" });
      break;
    case "DELETE":
      res.status(405).json({ message: "DELETE not allowed" });
      break;
  }
}
