"use client";

import {
  Flex,
  Text,
  Box,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { TabsData } from "@/app/lib/movie-tab-utils";

import GenreButtons from "./GenreButtons";

export default function CardMovieSection({
  results,
  genres,
}: {
  results: any;
  genres: any;
}) {
  return (
    <Flex
      gap={{ base: "5px", md: "20px" }}
      flexWrap={"wrap"}
      my={"50px"}
      mx={{ base: "2px", md: "136px" }}
    >
      <Tabs my={"51px"}>
        <TabList borderBottom={"1px solid #6A6A6A"}>
          {TabsData.map((datas: any) =>
            datas.TabDetails.map((data: any) => (
              <Tab
                color={"white"}
                key={data.name}
                fontSize={{ base: "8px", md: "18px" }}
              >
                <Icon as={data.icon} />
                <Text ml={{ base: "2px", md: "10px" }}>{data.name}</Text>
              </Tab>
            ))
          )}
        </TabList>

        <TabPanels mt={"42px"}>
          <TabPanel>
            <Box>
              <GenreButtons genresData={genres} />
            </Box>
            <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
              {results.map((movie: any, index: number) => (
                <MovieCard
                  key={index}
                  color={"white"}
                  image={movie.poster_path}
                  title={movie.title}
                  year={movie.release_date}
                  rate={movie.vote_average}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Box>
              <GenreButtons genresData={genres} />
            </Box>
            <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
              {results.map((movie: any, index: number) => (
                <MovieCard
                  key={index}
                  color={"white"}
                  image={movie.poster_path}
                  title={movie.title}
                  year={movie.release_date}
                  rate={movie.vote_average}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Box>
              <GenreButtons genresData={genres} />
            </Box>
            <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
              {results.map((movie: any, index: number) => (
                <MovieCard
                  key={index}
                  color={"white"}
                  image={movie.poster_path}
                  title={movie.title}
                  year={movie.release_date}
                  rate={movie.vote_average}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Box>
              <GenreButtons genresData={genres} />
            </Box>
            <Flex flexWrap={"wrap"} justifyContent={"space-evenly"}>
              {results.map((movie: any, index: number) => (
                <MovieCard
                  key={index}
                  color={"white"}
                  image={movie.poster_path}
                  title={movie.title}
                  year={movie.release_date}
                  rate={movie.vote_average}
                />
              ))}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
