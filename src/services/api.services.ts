import axios from "axios";
import { config } from "../config";
import { ResponseData } from "../types";

export function giphyCall(input: string) {
  return axios
    .get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: config.apiKey,
        limit: 1,
        q: input,
      },
    })
    .then((response) => response as ResponseData);
}
