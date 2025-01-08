import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import SideBar from "@/components/SideBar";
import { getMovie, getGenre } from "@/app/lib/get-services"; // Adjust the import path as needed

export default async function MoviesDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const movieData = await getMovie();
  const genreData = await getGenre();

  const movie = movieData.results.find(
    (m: any) => m.id.toString() === params.id
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const genres = movie.genre_ids
    .map((id: number) => genreData.genres.find((g: any) => g.id === id)?.name)
    .filter(Boolean);

  return (
    <Flex bg="gray.900" minHeight="fit-content" color="white">
      <SideBar />
      <Box flex={1}>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={`${movie.title} backdrop`}
          width="100%"
          height="300px"
          objectFit="cover"
        />
        <Container maxW="container.xl" mt={-10} position="relative">
          <Flex>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
              width="200px"
              borderRadius="md"
              boxShadow="lg"
            />
            <VStack align="start" ml={6} spacing={4}>
              <Heading as="h1" size="2xl">
                {movie.title}
              </Heading>
              <Text fontSize="lg">{movie.overview}</Text>
              <Stack direction="row" spacing={4}>
                <Text>Popularity: {movie.popularity.toFixed(1)}</Text>
                <Text>Release Date: {movie.release_date}</Text>
                <Text>Language: {movie.original_language.toUpperCase()}</Text>
              </Stack>
              <Text>Genres: {genres.join(", ")}</Text>
              <Text>Rating: {movie.vote_average.toFixed(1)}</Text>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}
