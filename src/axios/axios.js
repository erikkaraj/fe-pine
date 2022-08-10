import axios from "axios";
import { getToken } from "./tokenStore";

/**
 * ! Use environment variables
 * @var {string}
 */
const endpoint = "http://127.0.0.1:8000/api";
/**
 * @var {string}
 */
const publicEndpoint = endpoint
  ? endpoint.replace("/api/", "/")
  : "http://127.0.0.1:8000/";

/**
 * @var {object}
 */
const axiosClient = axios.create({
  baseURL: endpoint,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 1000 * 30,
});

/**
 * Defines interceptors
 */

// Authorization interceptor
axiosClient.interceptors.request.use(
  async function (config) {
    const userToken = getToken();

    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// axiosClient.interceptors.response.use(
//   async function (config) {
//     return config;
//   },
//   function (error) {
//     if (error.response?.status == 401 && location.href.indexOf('login') === -1) {
//       localStorage.removeItem('@pine/token');
//       location.reload();
//       return error.response;
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export { axiosClient, publicEndpoint };
