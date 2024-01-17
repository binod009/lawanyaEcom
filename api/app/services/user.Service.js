const Joi = require("joi");

class UserService {
  validateUser = (data) => {
    try {
      let UserSchema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        phone: Joi.number().required(),
        password: Joi.string().alphanum().required(),
        role: Joi.string().required(),
        status: Joi.string().required(),
        image: Joi.string().empty(),
      });
      let response = UserSchema.validate(data);
      if (response.error) {
        throw response.error.details[0].message;
      }
    } catch (err) {
      throw err;
    }
  };
}

module.exports = UserService;
