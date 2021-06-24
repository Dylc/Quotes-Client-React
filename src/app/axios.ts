const axios = require('axios');
export default axios.create({
  baseURL: "http://cargatser.com/",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "http://cargatser.com/", 
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
});