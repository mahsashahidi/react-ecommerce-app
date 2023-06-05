import axios from "axios";

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // THIS HEADER IS TO FETCH FROM STRAPI
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
});
