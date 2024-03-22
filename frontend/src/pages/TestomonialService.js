import HttpServices from "../components/service/http-service";

class TestomonialService extends HttpServices {
  createTestomonial = async (data) => {
    try {
      let response = await this.postRequest("/testomonial", data, {
        login: true,
        files: true,
      });
      return response;
    } catch (excp) {
      throw excp;
    }
  };

  getAllTestomonial = async () => {
    try {
      let response = await this.getRequest("/testomonial", { login: true });
      return response;
    } catch (excp) {
      throw excp;
    }
  };

  deleteTestomonialById = async (id) => {
    try {
      let response = await this.deleteRequest("/testomonial/" + id, {
        login: true,
      });
      return response;
    } catch (excp) {
      throw excp;
    }
  };
}
const testo_svc = new TestomonialService();
export default testo_svc;
