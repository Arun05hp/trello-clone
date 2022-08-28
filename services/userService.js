import { apiUrl } from "../config";
import http from "./httpService";

const apiEndPoint = apiUrl + "/user";

export function register(user) {
  return http.post(apiEndPoint, {
    email: user.email,
    password: user.password,
  });
}
