import axios from "axios";
import { baseUrl } from "..";

const login = async (username, password) => {
  var response = await axios.post(`${baseUrl}/api/token`, {
    username: username,
    password: password,
  });
  let token = response.data.token;
  axios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };
  return token;
};

export { login };
