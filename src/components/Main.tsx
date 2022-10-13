import React, { useEffect, useState } from "react";
import { giphyCall } from "../services/api.services";

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gif, setGif] = useState({});

  useEffect(getGifs, []);

  function getGifs() {
    giphyCall().then((response) => {
      console.log(response);
      return response;
    });
  }
  return <div>Main</div>;
}
