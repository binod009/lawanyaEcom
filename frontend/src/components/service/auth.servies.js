import HttpServices from "./http-service";
class AuthServices extends HttpServices {
  login = async (data) => {
    try {
      let loginres = await this.postRequest("/login", data);
      let loggedin_user = {
        name: loginres.result.user.name,
        _id: loginres.result.user._id,
        status: loginres.result.user.status,
        role: loginres.result.user.role,
      };
      console.log("currentuser", loggedin_user);
      localStorage.setItem("access_Token", loginres.result.access_Token);
      localStorage.setItem("active_client", JSON.stringify(loggedin_user));
      return loggedin_user;
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
