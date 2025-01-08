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
      maxWidth={"1440px"}
      mx={{ base: "0px", md: "10px", xl: "auto" }}
    >
      <Tabs my={"51px"}>
        <TabList borderBottom={"1px solid #6A6A6A"}>
          {TabsData.map((datas: any) =>
            datas.TabDetails.map((data: any) => (
              <Tab
                px={{ base: "2", md: "5" }}
                color={"white"}
                key={data.name}
                fontWeight={"600"}
                fontSize={{ base: "10px", md: "18px" }}
              >
                <Icon as={data.icon} />
                <Text ml={{ base: "2px", md: "10px" }}>{data.name}</Text>
              </Tab>
            ))
          )}
        </TabList>

        <TabPanels mt={"5px"}>
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
                  id={movie.id}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Box>
              <GenreButtons genresData={genres} />
            </Box>
            <Flex gap={"5px"} justifyContent={"space-evenly"} flexWrap={"wrap"}>
              {results.map((movie: any, index: number) => (
                <MovieCard
                  key={index}
                  color={"white"}
                  image={movie.poster_path}
                  title={movie.title}
                  year={movie.release_date}
                  rate={movie.vote_average}
                  id={movie.id}
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
                  id={movie.id}
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
                  id={movie.id}
                />
              ))}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
