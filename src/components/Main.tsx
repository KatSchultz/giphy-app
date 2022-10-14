import React, { useEffect, useState } from "react";
import { giphyCall } from "../services/api.services";
import { Gif } from "../types";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("silly");
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(getGifs, [searchTerm]);

  function getGifs() {
    giphyCall(searchTerm).then((response) => {
      console.log(response);
      setGifs(response.data.data);
      return response;
    });
  }

  function updateSearchTerm(term: string) {
    setSearchTerm(term);
  }

  return (
    <>
      <SearchForm updateTerm={updateSearchTerm} />
      <ResultsList gifs={gifs} />
    </>
  );
}
