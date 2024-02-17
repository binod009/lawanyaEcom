import HttpServices from "../service/http-service";

class CarouselService extends HttpServices {
  CreateCarousel = async (data) => {
    try {
      let response = await this.postRequest("/banner", data, {
        login: true,
        files: true,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  getAllCarousel = async () => {
    try {
      let response = await this.getRequest("/banner", { login: true });
      return response;
    } catch (error) {
      throw error;
    }
  };
  deleteCarouselById = async (id) => {
    try {
      return await this.deleteRequest(`/banner/${id}`, { login: true });
    } catch (error) {
      throw error;
    }
  };
}

export const carousel_svc = new CarouselService();
export default carousel_svc;