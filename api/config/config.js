const Config = {
  ENVIRONMENT: "dev",
  SMTP: {
    HOST: "sandbox.smtp.mailtrap.io",
    PORT: 465,
    USER: "4fb1987562444a",
    PASS: "344fb5fd56bd7c",
    FROM: "noreply@test.com",
    TLS: false,
  },
  DB: {
    PROTOCOL: "mongodb",
    HOST: "localhost",
    NAME: "lawanya",
    USER: "",
    PWD: "",
    PORT: 27017,
  },
};

// DB: {
//   host: `mongodb+srv://${[process.env.MONGODB_USERNAME]}:${
//     process.env.MONGODB_PASSWORD
//   }@cluster0.8brv6gn.mongodb.net/`;
// }
module.exports = Config;

// 127.0.0.1
