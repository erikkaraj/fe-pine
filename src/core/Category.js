import { axiosClient } from "../axios/axios";

/**
 * @returns {Array<Object>}
 */
const getCategories = async () => {
  const response = await axiosClient.get(`/category`);

  const {
    data: { data: categories },
  } = response;

  return categories;
};

export { getCategories };
