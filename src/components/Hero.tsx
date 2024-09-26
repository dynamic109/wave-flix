"use client";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  VStack,
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
import { FiPlus } from "react-icons/fi";
import Nav from "./Nav";
import SideBar from "./SideBar";

export default function Hero() {
  return (
    <Box pb={{ md: "50px" }} className="background-image" flexDir="column">
      <Nav />
      <SideBar />
      <Container maxWidth={{ md: "1500px" }}>
        <Flex
          gap={"20px"}
          py="120px"
          direction="column"
          h="350px"
          color="white"
          px="60px"
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

          <Stack fontSize={{ sm: "10px", md: "14px" }}>
            <Text>ACTION - SCIENCE FICTION</Text>
            <Heading
              fontFamily={"New Amsterdam"}
              letterSpacing={"widest"}
              fontSize={{ base: "40px", md: "50px" }}
            >
              PACIFIC RIM
            </Heading>
            <HStack>
              <Text>Year |</Text>
              <Text>Rating |</Text>
              <Text>Hour |</Text>
              <Text>Rate</Text>
            </HStack>
            <Text maxW="500px">
              Lorem ipsum dolor sit amet consectetur. Nunc sit eget pharetra ut
              at duis non justo turpis. Enim interdum etiam feugiat egestas.
              Egestas ipsum in egestas tristique eget. Nibh elementum ultrices
              amet vel commodo aenean lectus fringilla morbi. Elit laoreet eu
              malesuada imperdiet nullam venenatis non nec. Mattis netus blandit
              morbi.
            </Text>
            <HStack>
              <Button
                bg="#00ADEF"
                color={"white"}
                leftIcon={<FaPlay />}
                colorScheme="blue.700"
              >
                Play
              </Button>
              <Button
                color="white"
                colorScheme="white"
                bg=""
                leftIcon={<FiPlus />}
              >
                My List
              </Button>
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
    </Box>
  );
}
