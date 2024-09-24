"use client";

import { useEffect } from "react";

export default function Data() {
  const getMovie = async () => {
    await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=32d4bcbb46f15adafa990e0388136466"
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <div>Movie fetch here</div>;
}
