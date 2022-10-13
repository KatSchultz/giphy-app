import axios from "axios";
import { config } from "../config";

export function giphyCall() {
  return axios.get(`api.giphy.com/v1/gifs/trending`, {
    params: {
      api_key: config.apiKey,
      limit: 1,
    },
  });
}
