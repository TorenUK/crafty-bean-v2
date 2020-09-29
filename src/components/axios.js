import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-crafty-bean-v2.cloudfunctions.net/api", // the api (cloud function) url
});

export default instance;

// CLOUD ENDPOINT
// https://us-central1-crafty-bean-v2.cloudfunctions.net/api

// LOCAL HOST ENDPOINT
// http://localhost:5001/crafty-bean-v2/us-central1/api
