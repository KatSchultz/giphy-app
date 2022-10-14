import React, { useEffect, useState } from "react";
import { giphyCall } from "../services/api.services";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState({});

  useEffect(getGifs, [searchTerm]);

  function getGifs() {
    giphyCall().then((response) => {
      console.log(response);
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
