import axios from "axios";

const instance = axios.create({
  baseURL: "http://publisher.freesher.ct8.pl/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;
