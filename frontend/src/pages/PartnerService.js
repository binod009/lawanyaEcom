import HttpServices from "../components/service/http-service";

class PartnerService extends HttpServices {
  createParnter = async (data) => {
    try {
      let res = await this.postRequest("/partner", data, {
        login: true,
        files: true,
      });
      return res;
    } catch (err) {
      throw err;
    }
  };
  getAllPartner = async () => {
    try {
      let res = await this.getRequest("/partner", { login: true });
      return res;
    } catch (err) {
      throw err;
    }
  };

  deletePartnerById = async (id) => {
    try {
      let res = await this.deleteRequest("/partner/" + id, { login: true });
      return res;
    } catch (err) {
      throw err;
    }
  };
}
export const partner_svc = new PartnerService();
export default partner_svc;
