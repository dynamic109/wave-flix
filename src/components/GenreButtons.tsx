import {
  Flex,
  Button,
  useDisclosure,
  Box,
  Collapse,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
// import Collapsible from "./ui/Collapsible"
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";

export default function GenreButtons({ genresData }: any) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      w={"fit-content"}
      h={"fit"}
      display={"flex"}
      flexWrap={"wrap"}
      alignItems={"center"}
    >
      <HStack display={{ base: "none", md: "flex" }}>
        {genresData?.genres.slice(0, 5).map((genre: any) => (
          <Flex flexDir={"row"} key={genre.id} mb={"20px"}>
            <Button
              p={{ base: "0px 20px", md: "6px 40px" }}
              borderRadius={"64"}
              fontSize={"12px"}
              mr={{ base: "10px", md: "5px" }}
              bg={"#151515"}
              color={"#FDFDFD"}
              fontWeight={"400"}
            >
              {genre.name}
            </Button>
          </Flex>
        ))}
      </HStack>

      <HStack display={{ base: "flex", md: "none" }}>
        {genresData?.genres.slice(0, 3).map((genre: any) => (
          <Flex flexDir={"row"} key={genre.id} mb={"20px"}>
            <Button
              p={{ base: "3px auto" }}
              borderRadius={"64"}
              fontSize={"12px"}
              mr={{ base: "4px" }}
              bg={"#151515"}
              color={"#FDFDFD"}
            >
              {genre.name}
            </Button>
          </Flex>
        ))}
      </HStack>
      <Collapse in={isOpen}>
        <SimpleGrid
          display={{ base: "grid", md: "none" }}
          columns={{ base: 2, md: 6 }}
          spacing={4}
          mt={4}
        >
          {genresData?.genres.slice(3).map((genre: any) => (
            <Flex flexDir={"row"} w={"100%"} key={genre.id} mb={"20px"}>
              <Button
                p={{ base: "3px 20px", md: "6px 40px" }}
                borderRadius={"64"}
                fontSize={"12px"}
                mr={{ base: "10px", md: "25px" }}
                bg={"#151515"}
                color={"#FDFDFD"}
              >
                {genre.name}
              </Button>
            </Flex>
          ))}
        </SimpleGrid>
        <SimpleGrid
          display={{ base: "none", md: "grid" }}
          columns={{ base: 2, md: 6 }}
          spacing={4}
          mt={4}
        >
          {genresData?.genres.slice(5).map((genre: any) => (
            <Flex flexDir={"row"} w={"100%"} key={genre.id} mb={"20px"}>
              <Button
                p={{ base: "3px 20px", md: "6px 40px" }}
                borderRadius={"64"}
                fontSize={"12px"}
                mr={{ base: "10px", md: "25px" }}
                bg={"#151515"}
                color={"#FDFDFD"}
              >
                {genre.name}
              </Button>
            </Flex>
          ))}
        </SimpleGrid>
      </Collapse>
      <Box display={"flex"} alignItems={"center"} onClick={onToggle}>
        {isOpen ? (
          <RiArrowLeftFill size={25} color="white" />
        ) : (
          <RiArrowRightFill size={25} color="white" />
        )}
      </Box>
    </Flex>
  );
}
