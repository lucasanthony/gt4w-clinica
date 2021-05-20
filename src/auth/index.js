import api from "../services/api";

export const isAuthenticated = () => {
  let authenticated = false;
  let token = localStorage.getItem("auth_token") || "";

  if (token) {
    api
      .get("/token")
      .then((response) => {
        authenticated = response.status === 200 ? true : false;
        localStorage.setItem("isAuthenticated", authenticated)
      }).catch((error) => {
        localStorage.setItem("isAuthenticated", false)
      });
  } else {
    localStorage.setItem("isAuthenticated", false)
  }
};
