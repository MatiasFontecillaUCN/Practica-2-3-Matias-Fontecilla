import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.50:8000/api";

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const EndPoints = {
  profile: () => requests.get("/profile"),
};

const agent = { EndPoints };

export default agent;
