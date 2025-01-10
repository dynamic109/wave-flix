import {
  Box,
  Stack,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import SideBar from "@/components/SideBar";
import { getMovie, getGenre } from "@/app/lib/get-services";

interface PageParams {
  id: string;
}

interface MovieDetailsPageProps {
  params: PageParams;
}

export default async function MoviesDetailsPage({
  params,
}: MovieDetailsPageProps) {
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
          height="500px"
          objectFit="cover"
        />
        <Stack
          maxW="1440px"
          mx={"auto"}
          mt={-40}
          position="relative"
          gap={"20px"}
        >
          <Flex
            px={"140px"}
            w={"full"}
            alignItems={"center"}
            justify={"space-between"}
          >
            <Heading as="h1" fontSize="40px">
              {movie.title}
            </Heading>
            <Box>
              <Text>{movie.release_date}</Text>
            </Box>
          </Flex>
          <Spacer />
          <Flex px={"140px"} bg="black" w={"full"} align="center">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
              width="200px"
              borderRadius="md"
              boxShadow="lg"
              // mt={-10}
            />
            <VStack align="start" ml={6} spacing={3}>
              <Text fontSize="lg">{movie.title}</Text>
              <Text fontSize="lg">{genres.join(" - ").toUpperCase()}</Text>
              <Text fontSize="lg">{movie.overview}</Text>
              <Stack>
                <Text>Popularity: {movie.popularity.toFixed(1)}</Text>
                <Text>Language: {movie.original_language.toUpperCase()}</Text>
                <Text>Rating: {movie.vote_average.toFixed(1)}</Text>
              </Stack>
            </VStack>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}
