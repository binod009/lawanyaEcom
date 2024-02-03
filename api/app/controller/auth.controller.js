const Config = require("../../config/config");
const UserService = require("../services/user.Service");
const nodemailer = require("nodemailer");
const { SMTP } = require("../../config/config");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

class AuthController {
  constructor() {
    this.user_svc = new UserService();
  }

  login = async (req, res, next) => {
    let data = req.body;

    try {
      this.user_svc.validateUserlogin(data);
      let loggedInUser = await this.user_svc.getUserByEmail(data);
      if (loggedInUser.length > 0) {
        if (
          loggedInUser &&
          bcrypt.compareSync(data.password, loggedInUser[0].password)
        ) {
          let token = jwt.sign(
            { user_id: loggedInUser[0]._id },
            process.env.JWT_KEY
          );
          res.status(200).json({
            result: {
              user: loggedInUser[0],
              access_Token: token,
            },
          });
        } else {
          next({ status: 400, msg: "Password didnot matched" });
        }
      }
      next({ status: 400, msg: "Email not found" });
    } catch (excp) {
      next({ status: 422, msg: excp });
    }
    //validation the username and email

    //checking username and password filed
    //after that using jwt verification
    //after then login with verified jwt token and store in local storage
  };

  registerUser = async (req, res, next) => {
    let body = req.body;
    body.password = bcrypt.hashSync(body.password, 10);
    if (req.file) {
      body.image = req.file.filename;
    }
    try {
      this.user_svc.validateUser(body);
      //email implementation
      // let transporter = nodemailer.createTransport({
      //   host: SMTP.HOST,
      //   port: SMTP.PORT,
      //   secure: SMTP.TLS,
      //   auth: {
      //     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      //     user: SMTP.USER,
      //     pass: SMTP.PASS,
      //   },
      // });

      // let mail_response = await transporter.sendMail({
      //   to: body.email,
      //   from: SMTP.FROM,
      //   subject: "Account Register",
      //   text: "Thanks" + " " + body.name + ", For signing up",
      //   html: "",
      // });

      // let client = await MongoClient.connect(url);
      // let db = client.db("lawanya");
      // let data = await db.collection("users").insertOne(body);
      let data = await this.user_svc.createUser(body);
      res.status(200).json({
        status: true,
        result: body,
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };
}

module.exports = AuthController;
