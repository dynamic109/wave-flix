"use client";
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Tab,
  Icon,
  Box,
} from "@chakra-ui/react";
import GenreButtons from "./GenreButtons";
import MovieLists from "./Data";
import { IconType } from "react-icons";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  popularity: number;
}

interface Genre {
  id: number;
  name: string;
}

interface MovieSectionProps {
  results: Movie[];
  TabsData: {
    TabDetails: {
      name: string;
      icon: IconType;
    }[];
  }[];
  genres: Genre[];
}

const MovieSection = ({ results, TabsData, genres }: MovieSectionProps) => {
  function isRecentlyAdded(releaseDate: string): boolean {
    const today = new Date();
    const release = new Date(releaseDate);
    const daysDifference =
      (today.getTime() - release.getTime()) / (1000 * 3600 * 24);

    return daysDifference <= 60;
  }

  return (
    <Tabs maxWidth={"1440px"} mx={"auto"} my={"51px"}>
      <TabList
        borderBottom={"1px solid #6A6A6A"}
        mx={{ base: "8px", md: "50px" }}
        textAlign={"center"}
      >
        {TabsData.map((datas) =>
          datas.TabDetails.map((data) => (
            <Tab
              px={{ base: "2", md: "5" }}
              color={"white"}
              key={data.name}
              fontWeight={"600"}
              fontSize={{ base: "10px", md: "18px" }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Icon as={data.icon} />
                <Text ml={{ base: "3px", md: "10px" }}>{data.name}</Text>
              </Box>
            </Tab>
          ))
        )}
      </TabList>

      <TabPanels mt={"5px"}>
        <TabPanel>
          <Box w={"full"} mx={{ base: "auto" }}>
            <GenreButtons genresData={genres} />
          </Box>
          <MovieLists data={results} />
        </TabPanel>
        <TabPanel>
          <Box w={"full"} mx={{ base: "auto" }}>
            <GenreButtons genresData={genres} />
          </Box>
          <MovieLists
            data={results.filter((movie) => movie.popularity > 1000)}
          />
        </TabPanel>
        <TabPanel>
          <Box w={"full"} mx={{ base: "auto" }}>
            <GenreButtons genresData={genres} />
          </Box>
          <MovieLists
            data={results.filter((movie) =>
              isRecentlyAdded(movie.release_date)
            )}
          />
        </TabPanel>
        <TabPanel>
          <Box w={"full"} mx={{ base: "auto" }}>
            <GenreButtons genresData={genres} />
          </Box>
          <MovieLists data={results} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MovieSection;
