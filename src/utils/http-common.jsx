import axios from "axios";
import { baseUrl } from "./constants";

export default axios.create({
  baseURL: baseUrl,
});

export const configPost = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export const configGet = {
  headers: {
    "Content-type": "application/json",
  },
};
