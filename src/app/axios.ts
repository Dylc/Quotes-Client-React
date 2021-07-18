const axios = require('axios');
export default axios.create({
  baseURL: "http://0.0.0.0:9000/",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "http://0.0.0.0:9000/", 
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
});