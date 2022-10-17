import React, { useState } from "react";

interface Props {
  updateTerm: (term: string) => void;
}

export default function SearchForm({ updateTerm }: Props) {
  const [input, setInput] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    updateTerm(input);
  }

  return (
    <form action="">
      <label htmlFor="">Search for a GIF</label>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit" onClick={submitHandler}>
        Search
      </button>
    </form>
  );
}
