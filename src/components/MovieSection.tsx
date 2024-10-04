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
      icon: IconType; // Specify a more precise type if possible
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
    <Tabs my={"51px"}>
      <TabList
        borderBottom={"1px solid #6A6A6A"}
        mx={{ sm: "10px", md: "136px" }}
      >
        {TabsData.map((datas) =>
          datas.TabDetails.map((data) => (
            <Tab color={"white"} key={data.name}>
              <Icon as={data.icon} />
              <Text ml={{ sm: "5px", md: "10px" }}>{data.name}</Text>
            </Tab>
          ))
        )}
      </TabList>

      <TabPanels mt={"42px"}>
        <TabPanel>
          <Box mx={{ sm: "10px", md: "136px" }}>
            <GenreButtons genresData={genres} />
          </Box>
          <MovieLists data={results} />
        </TabPanel>
        <TabPanel>
          <Box mx={{ sm: "10px", md: "136px" }}>
            <GenreButtons genresData={genres} />
          </Box>
          <MovieLists
            data={results.filter((movie) => movie.popularity > 1000)}
          />
        </TabPanel>
        <TabPanel>
          <Box mx={{ sm: "30px", md: "136px" }}>
            <GenreButtons genresData={genres} />
          </Box>
          <MovieLists
            data={results.filter((movie) =>
              isRecentlyAdded(movie.release_date)
            )}
          />
        </TabPanel>
        <TabPanel>
          <Box mx={{ sm: "30px", md: "136px" }}>
            <GenreButtons genresData={genres} />
          </Box>
          <MovieLists data={results} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MovieSection;
