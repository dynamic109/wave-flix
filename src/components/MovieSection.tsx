import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  TabIndicator,
} from "@chakra-ui/react";
import GenreButtons from "./GenreButtons";
import MovieLists from "./Data";
import { FaArrowTrendUp, FaStar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { SiFireship } from "react-icons/si";

export default function MovieSection({ results }: any) {
  return (
    <Tabs mx={{ sm: "30px", md: "136px" }} my={"51px"}>
      <TabList borderBottom={"1px solid #6A6A6A"}>
        <Tab color={"white"}>
          <FaArrowTrendUp fill="white" width="30px" height="24px" />
          <Text ml={{ sm: "5px", md: "10px" }}>Trending</Text>
        </Tab>
        <Tab color={"white"}>
          <SiFireship fill="white" width="30px" height="24px" />
          <Text ml={{ sm: "5px", md: "10px" }}>Popular</Text>
        </Tab>
        <Tab color={"white"}>
          <FiPlus fill="white" width="30px" height="24px" />
          <Text ml={{ sm: "5px", md: "10px" }}>Recently added</Text>
        </Tab>
        <Tab color={"white"}>
          <FaStar fill="white" width="30px" height="24px" />
          <Text ml={{ sm: "5px", md: "10px" }}>Premium</Text>
        </Tab>
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
          <GenreButtons />
          <MovieLists data={results} />
        </TabPanel>
        <TabPanel>
          <GenreButtons />
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <GenreButtons />
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          <GenreButtons />
          <p>four!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
