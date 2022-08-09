import axios from "axios";

export function CheckImage(path) {
  console.log(path);
  axios
    .get(path)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}
