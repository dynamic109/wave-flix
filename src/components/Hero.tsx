"use client";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  HStack,
  Heading,
  Text,
  Button,
  Box,
  Container,
  Stack,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import Nav from "./Nav";
import SideBar from "./SideBar";
import PlayBtn from "./PlayBtn";
import MovieListBtn from "./MovieListBtn";

export default function Hero() {
  return (
    <Stack
      pb={{ sm: "10px", md: "50px" }}
      className="background-image"
      direction="column"
    >
      <Nav />
      <SideBar />
      <Container maxWidth={{ sm: "100%", md: "1500px" }}>
        <Flex
          gap={"20px"}
          py={{ sm: "80px", md: "120px" }}
          direction="column"
          h={{ sm: "max-content", md: "350px" }}
          color="white"
          px={{ sm: "50px", md: "60px" }}
        >
          <InputGroup
            gap={"14px"}
            w={{ md: "456px" }}
            backdropFilter={"blur(4px)"}
            color={"#FFFFFF"}
            borderRadius={"xs"}
          >
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input border={"none"} type="text" placeholder="Search" />
          </InputGroup>

          <Spacer />

          <Stack>
            <Text fontSize={{ sm: "5px", md: "14px" }}>
              ACTION - SCIENCE FICTION
            </Text>
            <Heading
              fontFamily={"New Amsterdam"}
              letterSpacing={"widest"}
              fontSize={{ sm: "18px", md: "50px" }}
            >
              PACIFIC RIM
            </Heading>
            <Stack direction={"row"} fontSize={{ sm: "10px", md: "14px" }}>
              <Text>Year |</Text>
              <Text>Rating |</Text>
              <Text>Hour |</Text>
              <Text>Rate</Text>
            </Stack>
            <Text
              maxW={{ sm: "800px", md: "500px" }}
              fontSize={{ sm: "12px", md: "14px" }}
            >
              Lorem ipsum dolor sit amet consectetur. Nunc sit eget pharetra ut
              at duis non justo turpis. Enim interdum etiam feugiat egestas.
              Egestas ipsum in egestas tristique eget. Nibh elementum ultrices
              amet vel commodo aenean lectus fringilla morbi. Elit laoreet eu
              malesuada imperdiet nullam venenatis non nec. Mattis netus blandit
              morbi.
            </Text>
            <HStack>
              <PlayBtn text={"Play"} />
              <MovieListBtn />
            </HStack>
          </Stack>

          <Spacer />
          <Box>
            <Button
              color="white"
              colorScheme="skyblue"
              bg="transparent"
              gap="10px"
              leftIcon={<FaPlay />}
            >
              WATCH TRAILER
            </Button>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
}
