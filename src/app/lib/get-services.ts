export async function getMovie() {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=32d4bcbb46f15adafa990e0388136466"
  );
  const data = await res.json();

  return data;
}

export async function getGenre() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=32d4bcbb46f15adafa990e0388136466"
  );
  const genre = await response.json();

  return genre;
}
