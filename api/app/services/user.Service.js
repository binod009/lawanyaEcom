const Joi = require("joi");
const DbService = require("./db.service");
const userModel = require("../models/register.model");

class UserService extends DbService {
  //used for validating user coming from client side to backend
  validateUser = (data) => {
    try {
      let UserSchema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        phone: Joi.number().required(),
        password: Joi.string()
          .pattern(/[!@#$%^&*(),.?":{}|<>]/)
          .required(),
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

  //creates new ueser into the database
  createUser = async (data) => {
    try {
      let doc = await userModel.create(data);
      doc.save();
    } catch (excp) {
      throw excp; //can be handle where this function is called
    }
  };

  //finds user by email provided by client to backend
  getUserByEmail = async (data) => {
    try {
      let result = await userModel.find({
        email: data.email,
      });
      return result;
    } catch (err) {
      throw err;
    }
  };

  //find user by userid provided by user
  getUserById = async (data) => {
    try {
      let result = await userModel.findById(data);
      return result;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = UserService;
