import React from "react";
import { Gif } from "../types";

interface Props {
  gifs: Gif[];
}
export default function ResultsList({ gifs }: Props) {
  const styles = {
    width: "300px",
    height: "300px",
  };
  return (
    <div>
      <h2>Results</h2>
      {gifs.map((gif) => (
        <div key={gif.id}>
          <img src={gif.images.fixed_width.url} alt="" style={styles} />
        </div>
      ))}
    </div>
  );
}
