const { ObjectId } = require("mongodb");
const DbService = require("./db.service");
const Joi = require("joi");
const eventModel = require("../models/event.model");

class EventService extends DbService {
  validateEvents = (data) => {
    try {
      let eventSchema = Joi.object({
        eventimage: Joi.string().empty().required(),
        date: Joi.date().required(),
        time: Joi.string().required(),
        description: Joi.string().required(),
      });
      let response = eventSchema.validate(data);
      if (response.error) {
        throw response.error.details[0].message;
      }
    } catch (err) {
      throw err;
    }
  };

  createEvent = async (data) => {
    try {
      let event_obj = new eventModel(data);
      event_obj.save();
      return event_obj;
    } catch (err) {
      throw err;
    }
  };

  getAllEvents = async () => {
    try {
      let result = await eventModel.find({});
      return result;
    } catch (err) {
      throw err;
    }
  };

  deleteEventById = async (id) => {
    try {
      let result = await eventModel.findByIdAndDelete({
        _id: id,
      });
      return result;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = EventService;