import Hero from "@/components/Hero";
import { Box } from "@chakra-ui/react";
import { getGenre, getMovie } from "./lib/get-services";
import MovieSection from "@/components/MovieSection";
import { TabsData } from "./lib/movie-tab-utils";
import { SecondTabsData } from "./lib/movie-tab-utils";
import Footer from "@/components/Footer";
import RecentMovie from "@/components/RecentMovie";
import ShowMore from "@/components/ShowMore";
import CardMovieSection from "@/components/CardMovieSection";

async function Home() {
  const movies = await getMovie();
  const genres = await getGenre();
  const { results } = movies;
  console.log(results);
  console.log(genres);

  return (
    <Box width={"100%"}>
      <Hero />
      <MovieSection results={results} TabsData={TabsData} genres={genres} />
      <MovieSection
        results={results}
        TabsData={SecondTabsData}
        genres={genres}
      />
      <CardMovieSection
        results={results}
        genres={genres}
      />
      <RecentMovie />
      <ShowMore />
      <Footer />
    </Box>
  );
}
export default Home;
