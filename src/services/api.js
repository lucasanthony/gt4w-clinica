import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://api-gt4w-clinica.herokuapp.com/',
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("clinica_token")
  }
});

export default Api;
