import HttpServices from "../components/service/http-service";

class Service extends HttpServices {
  createProgram = async (data) => {
    try {
      let response = await this.postRequest("/programme", data, {
        login: true,
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  getAllProgram = async () => {
    try {
      let response = await this.getRequest("/programme", { login: true });
      return response;
    } catch (err) {
      throw err;
    }
  };

  deleteProgram = async (id) => {
    try {
      return await this.deleteRequest("/programme/" + id, { login: true });
    } catch (err) {
      throw err;
    }
  };

  trimmer = (para) => {
    const word = para.split(" ");
    const firstHalf = word.slice(0, Math.ceil(word.length / 2));
    return firstHalf.join(" ") + ".....";
  };
}
const program_svc = new Service();
export default program_svc;
