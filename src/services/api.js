import axios from 'axios'

const Api = axios.create({
  baseURL: 'localhost:8080/',
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("auth_token")
  }
});

export default Api;
