"use client";

import { SearchIcon } from "@chakra-ui/icons";
import RatingImg from "../../public/images/rating-group.svg";
import Image from "next/image";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  HStack,
  Heading,
  Text,
  Box,
  Container,
  Stack,
} from "@chakra-ui/react";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa";
import PlayBtn from "./PlayBtn";
import MovieListBtn from "./MovieListBtn";

export default function Hero() {
  return (
    <Stack
      pb={{ base: "10px", md: "20px" }}
      px={{ base: "0px", md: "50px" }}
      h={"fit-content"}
      className="background-image"
      direction="column"
    >
      <Container maxWidth={{ base: "100%", md: "1500px" }}>
        <Flex
          gap={{ base: "10px", md: "30px" }}
          py={{ base: "80px", md: "100px" }}
          direction="column"
          h={{ base: "fit-content" }}
          color="white"
          px={{ base: "10px", md: "20px", lg: "40px" }}
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

          <Stack fontSize={{ base: "14px", md: "16px" }} gap={"10px"}>
            <Text color={"#B4B4B4"}>ACTION - SCIENCE FICTION</Text>
            <Heading
              fontFamily={"New Amsterdam"}
              letterSpacing={"widest"}
              fontSize={{ base: "28px", md: "50px" }}
            >
              PACIFIC RIM
            </Heading>
            <Stack
              color={"#B4B4B4"}
              alignItems={"center"}
              direction={"row"}
              fontWeight={"semibold"}
            >
              <Text>2013 |</Text>
              <Text
                w={"24px"}
                h={"24px"}
                textAlign={"center"}
                bg={"yellow.300"}
                color={"white"}
              >
                12
              </Text>
              <Text>| 2h 11min |</Text>
              <Box
                w={{ base: "70px", md: "144px" }}
                h={{ base: "15px", md: "24px" }}
              >
                <Image src={RatingImg} alt="Rating" />
              </Box>
            </Stack>
            <Text maxW={{ base: "800px", md: "500px" }}>
              Lorem ipsum dolor sit amet consectetur. Nunc sit eget pharetra ut
              at duis non justo turpis. Enim interdum etiam feugiat egestas.
              Egestas ipsum in egestas tristique eget. Nibh elementum ultrices
              amet vel commodo aenean lectus fringilla morbi. Elit laoreet eu
              malesuada imperdiet nullam venenatis non nec. Mattis netus blandit
              morbi.
            </Text>
            <HStack>
              <PlayBtn text={"PLAY"} />
              <MovieListBtn />
            </HStack>
          </Stack>

          <Spacer />
          <Box>
            <Button
              textAlign={"start"}
              color="white"
              bg="transparent"
              w={{ base: "fit-content", md: "222px" }}
              h={{ base: "30px", md: "66px" }}
              fontSize={{ base: "14px", md: "20px" }}
              borderRadius={"0"}
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
