import HttpServices from "../components/service/http-service";

class TestomonialService extends HttpServices {
  createTestomonial = (data) => {
    try {
      let response = this.postRequest("/testomonial", data, {
        login: true,
        files: true,
      });
      return response;
    } catch (excp) {
      throw excp;
    }
  };

  getAllTestomonial = () => {
    try {
      let response = this.getRequest("/testomonial", { login: true });
      return response;
    } catch (excp) {
      throw excp;
    }
  };

  deleteTestomonialById = (id) => {
    try {
      let response = this.deleteRequest("/testomonial" + id, { login: true });
      return response;
    } catch (excp) {
      throw excp;
    }
  };
}

export const testo_svc = new TestomonialService();
export default testo_svc;
