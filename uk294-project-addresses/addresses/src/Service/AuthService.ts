import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { sign } from "crypto";

/*
export function register( email : string , password : string) {
  return client.post(
    "auth/register",
    { email, password },
    { authorization: false }
  );
}

export function login( email : string, password : string) {
    return client.post(
      "auth/login",
      { email, password },
    );
  }

export function getProfile() {
  return client.get("/users/profile");
}
*/
const signinService = (api: AxiosInstance = defaultAxiosInstance) => ({

    login: async (email: string, password: string) => {

      const data = await api.post(
        "login",
        { email , password },
      )
      localStorage.setItem('accessToken', data.data.accessToken )
        return data;
    },


});

export default signinService;

