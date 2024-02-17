const EventService = require("../services/event.service");
const { dateFormat, timeFormat } = require("../services/format.service");
class EventController {
  constructor() {
    this.event_svc = new EventService();
  }
  CreateEvent = async (req, res, next) => {
    let body = req.body;
    console.log("PrevIOUSBACKEND", body);
    body.eventdate = dateFormat(req.body.eventdate);
    body.time = timeFormat(req.body.time);
    try {
      if (req.file) {
        body.eventimage = req.file.filename;
      }
      this.event_svc.validateEvents(body);
      let finres = await this.event_svc.createEvent(body);
      res.status(200).json({
        status: true,
        msg: "create Successfully",
        result: finres,
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };

  GetEvents = async (req, res, next) => {
    try {
      let result = await this.event_svc.getAllEvents();
      res.status(200).json({
        status: true,
        result: result,
        msg: "successfully retrived",
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };

  deleteEvent = async (req, res, next) => {
    try {
      let result = await this.event_svc.deleteEventById(req.params.eventid);

      res.status(200).json({
        status: true,
        msg: "delete successfully",
        result: result,
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };
}

module.exports = EventController;
