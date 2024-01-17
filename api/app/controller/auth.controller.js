const Config = require("../../config/config");
const UserService = require("../services/user.Service");
const nodemailer = require("nodemailer");
const { SMTP } = require("../../config/config");
class AuthController {
  constructor() {
    this.user_svc = new UserService();
  }

  login = (req, res, next) => {
    let data = req.body;
    //checking username and password filed
    //after that using jwt verification
    //after then login with verified jwt token and store in local storage
  };

  registerUser = async (req, res, next) => {
    let body = req.body;
    if (req.file) {
      body.image = req.file.filename;
    }
    try {
      this.user_svc.validateUser(body);

      //email implementation
      let transporter = nodemailer.createTransport({
        host: SMTP.HOST,
        port: SMTP.PORT,
        secure: SMTP.TLS,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: SMTP.USER,
          pass: SMTP.PASS,
        },
      });

      let mail_response = await transporter.sendMail({
        to: body.email,
        from: SMTP.FROM,
        subject: "Account Register",
        text: "Thanks" + " " + body.name + ", For signing up",
        html: "",
      });
      // console.log("from mail", mail_response);
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
