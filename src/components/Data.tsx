import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

async function MovieLists({ data }: any) {
  return (
    <Container maxW={"400px"}>
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        {data.map((movie: any, index: number) => (
          <Box key={index}>
            <MovieCard
              color={index === 0 ? "blue" : "#000"}
              image={movie.poster_path}
              title={movie.title}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
export default MovieLists;
