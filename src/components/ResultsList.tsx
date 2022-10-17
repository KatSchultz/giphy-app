import React from "react";
import { Gif } from "../types";
import Result from "./Result";

interface Props {
  gifs: Gif[];
}
export default function ResultsList({ gifs }: Props) {
  return (
    <div className="result-container">
      <h2>Results</h2>
      {gifs.map((gif) => (
        <Result gif={gif} key={gif.id} />
      ))}
    </div>
  );
}
