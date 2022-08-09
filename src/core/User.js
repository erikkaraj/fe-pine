import { axiosClient } from "../axios/axios";

const postUser = async (name, email, password, role) => {
  const response = await axiosClient.post("/users/register", {
    name,
    email,
    password,
    role_id: role,
  });

  const { data: user = [] } = response;

  return user;
};

const updateUserProfile = async ({ payload, userId }) => {
  const response = await axiosClient.put(
    `/users/update-profile/${userId}`,
    payload
  );

  const { data: user = [] } = response;

  return user;
};

export { postUser, updateUserProfile };
