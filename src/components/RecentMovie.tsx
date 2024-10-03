"use client";

import { Stack, Icon, Flex, Text, Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import PlayBtn from "./PlayBtn";
import MovieListBtn from "./MovieListBtn";

export default function RecentMovie() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Stack
        className="recent-movie-background"
        maxW={"1100px"}
        padding={{ sm: "30px", md: "70px" }}
        color={"white"}
        spacing={"50px"}
      >
        <Stack direction={"row"} display={"flex"} alignItems={"center"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"50px"}
            fontSize={"25px"}
            fontFamily={"New Amsterdam"}
            bg="red"
            width={"42px"}
            height={"38px"}
            color="white"
            borderRadius={"5px"}
          >
            16
          </Box>
          <Text>| 2022 | 2 Seasons |</Text>
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              as={FaStar}
              key={index}
              color="white"
              boxSize={4}
              alignSelf={"center"}
            />
          ))}
        </Stack>
        <Stack maxW={{ sm: "400px", md: "644px" }}>
          <Heading>House of the Dragon</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            corrupti nemo odit delectus, repellat vitae inventore aperiam magni
            cum sit tempora ad, sapiente recusandae nam porro temporibus debitis
            est reprehenderit?
          </Text>
        </Stack>
        <Flex
          direction={{ sm: "column", md: "row" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          gap={"10px"}
        >
          <Flex gap={"15px"}>
            <Link href="#">Informations</Link>
            <Link href="#">Trailer</Link>
            <Link href="#">Reviews</Link>
          </Flex>
          <Flex gap={"10px"}>
            <PlayBtn text={"Watch"} />
            <MovieListBtn />
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}
