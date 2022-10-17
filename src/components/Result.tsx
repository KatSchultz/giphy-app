import React from "react";
import { Gif } from "../types";

interface Props {
  gif: Gif;
}

export default function Result({ gif }: Props) {
  const styles = {
    width: "200px",
    height: "200px",
  };

  return (
    <div className="gif-result">
      <h3>{gif.title}</h3>
      <img src={gif.images.fixed_width.url} alt="" style={styles} />
      <a href={gif.url}>Link to Giphy</a>
    </div>
  );
}
