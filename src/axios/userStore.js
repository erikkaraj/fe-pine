import { isServer } from "./isServer";

const accessUser = "@pine/user";

const getUser = () => {
  try {
    if (!isServer) {
      return JSON.parse(localStorage.getItem(accessUser) || "");
    }
  } catch (e) {
    console.log(e);
  }
};

const setUser = (user) => {
  localStorage.setItem(accessUser, JSON.stringify(user));
};

export { getUser, setUser };
