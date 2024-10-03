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

const MovieSection = ({ results, TabsData, genres }: any) => {
  function isRecentlyAdded(releaseDate: any): boolean {
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
        {TabsData.map((datas: any) =>
          datas.TabDetails.map((data: any) => (
            <Tab color={"white"} key={data.name}>
              <Icon as={data.icon} />
              <Text ml={{ sm: "5px", md: "10px" }}>{data.name}</Text>
            </Tab>
          ))
        )}
      </TabList>

      {/* <TabIndicator
        mt={"-6.5px"}
        w="8px"
        h="8px"
        bg="blue.500"
        borderRadius="full"
      /> */}

      <TabPanels mt={"42px"}>
        <TabPanel>
          <Box mx={{ sm: "10px", md: "136px" }}>
            <GenreButtons genresData={genres} />
          </Box>
          <MovieLists data={results} />
        </TabPanel>
        <TabPanel>
          <Box mx={{ sm: "10px", md: "136px" }}><GenreButtons /></Box>
          {
            <MovieLists
              data={results.filter((movie: any) => movie.popularity > 1000)}
            />
          }
        </TabPanel>
        <TabPanel>
          <Box mx={{ sm: "30px", md: "136px" }}>
            <GenreButtons />
          </Box>
          {
            <MovieLists
              data={results.filter((movie: any) =>
                isRecentlyAdded(movie.release_date)
              )}
            />
          }
        </TabPanel>
        <TabPanel>
          <Box mx={{ sm: "30px", md: "136px" }}>
            <GenreButtons />
          </Box>
          <MovieLists data={results} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MovieSection;
