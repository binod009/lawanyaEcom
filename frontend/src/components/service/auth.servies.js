import HttpServices from "./http-service";
class AuthServices extends HttpServices {
  login = async (data) => {
    try {
      let res = await this.postRequest("/login", data);
      if (res) {
        let loggedin_user = {
          name: res.result.user.name,
          _id: res.result.user._id,
          status: res.result.user.status,
          role: res.result.user.role,
        };
        localStorage.setItem("access_Token", res.result.access_Token);
        // localStorage.setItem("active_client", JSON.stringify(loggedin_user));
        return loggedin_user;
      }
    } catch (error) {
      throw error;
    }
  };

  getLoggedInUser = async () => {
    try {
      let response = await this.postRequest("/me", {
        login: true,
      });
      return response;
    } catch (err) {
      throw err;
    }
  };
}
export const auth_svc = new AuthServices();
export default auth_svc;
