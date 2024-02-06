import HttpServices from "../../service/http-service";

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
}

export const carousel_svc = new CarouselService();
export default carousel_svc;
