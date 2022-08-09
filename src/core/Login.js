import { axiosClient } from "../axios/axios";
import { setToken } from "../axios/tokenStore";
import { setUser } from "../axios/userStore";

/**
 * Login api request
 *
 * @returns {Array<Object>}
 */
const login = async (email, password) => {
  const response = await axiosClient.post("/login", { email, password });

  if (response.data.success) {
    setToken(response.data.data.token);
    setUser(response.data.data.user);
    window.location.href = "/";
  }

  const {
    data: { data: loged = [] },
  } = response;

  return loged;
};

/**
 * Login api request
 *
 * @returns {Array<Object>}
 */
const google = async (token) => {
  const response = await axiosClient.post("/google", { token });

  if (response.data.success) {
    setToken(response.data.data.token);
    setUser(response.data.data.user);
    window.location.href = "/";
  }

  const {
    data: { data: loged = [] },
  } = response;

  return loged;
};

/**
 * Login api request
 *
 * @returns {Array<Object>}
 */
const facebook = async (token) => {
  const response = await axiosClient.post("/facebook", { token });

  if (response.data.success) {
    setToken(response.data.data.token);
    setUser(response.data.data.user);
    window.location.href = "/";
  }

  const {
    data: { data: loged = [] },
  } = response;

  return loged;
};

export { login, google, facebook };
