import MovieLists from "@/components/Data";
import Hero from "@/components/Hero";
import { Box } from "@chakra-ui/react";
import { getMovie } from "./lib/get-services";
import Nav from "@/components/Nav";
// import Swipe from "@/components/Swiper";
import MovieSection from "@/components/MovieSection";

async function Home() {
  const movies = await getMovie();
  const { results } = movies;
  console.log(results);

  return (
    <Box width={"100%"}>
      {/* <Nav /> */}
      <Hero />
      <MovieSection results={results} />
    </Box>
  );
}
export default Home;
