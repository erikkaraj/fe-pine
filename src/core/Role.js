import axios from "axios";
import { axiosClient } from "../axios/axios";

/**
 * @returns {Array<Object>}
 */
const getRoles = async ({ translation }) => {
  const response = await axiosClient.get(`/role/${translation}`);

  const {
    data: { data: roles },
  } = response;

  return roles;
};

export { getRoles };
