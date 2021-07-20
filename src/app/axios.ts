const axios = require("axios");
export default axios.create({
  baseURL: "http://cargatser.com/api",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "http://cargatser.com/api",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
