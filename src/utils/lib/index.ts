import axios from "axios";
export const reqAPI = axios.create({
  baseURL: "http://cors-anywhere.herokuapp.com/http://3.90.162.48:8000",
  headers: {
    "Content-type": "application/json",
  },
});