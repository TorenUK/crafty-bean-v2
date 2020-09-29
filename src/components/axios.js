import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // the api (cloud function) url
});

export default instance;

// https://us-central1-crafty-bean-v2.cloudfunctions.net/api

// http://localhost:5001/crafty-bean-v2/us-central1/api
