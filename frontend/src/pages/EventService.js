import HttpServices from "../components/service/http-service";
import dayjs from "dayjs";
class EventService extends HttpServices {
  
  createEvent = async (data) => {
  
    try {
      let res = await this.postRequest("/event", data, {
        login: true,
        files: true,
      });
      return res;
    } catch (error) {
      throw error;
    }
  };

  getAllEvents = async () => {
    try {
      let res = this.getRequest("/event", { login: true });
      return res;
    } catch (error) {
      throw error;
    }
  };
  deleteEventById = async (id) => {
    try {
      return await this.deleteRequest(id);
    } catch (error) {
      throw error;
    }
  };

  //backend Date fromate converter 2
  //exmp 2024-01-27T10:15:23.878Z =>J AN-27-2024
  convertDateFormat = (dateformat) => {
    console.log("date", dateformat);
    if (dateformat) {
      let newdate = dayjs(dateformat).format("MMM-DD-YYYY");
      return newdate;
    }
    return false;
  };
}

const event_svc = new EventService();
export default event_svc;
