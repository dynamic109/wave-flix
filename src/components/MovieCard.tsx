"use client";
import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import Link from "next/link";

export default function MovieCard({
  image,
  title,
  year,
  color,
  rate,
  id,
  overview,
  popularity,
  language,
  genreIds,
}: {
  image: string;
  title: string;
  year: string;
  color: string;
  rate: number;
  id: number;
  overview: string;
  popularity: number;
  language: string;
  genreIds: number[];
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggle() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Stack mt={"50px"}>
      <Link href={`/movie/details/${id}`}>
        <Box flex={"2"} color={"white"} width={"100%"}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
            width={{ base: "138px", md: "182px" }}
            height={{ base: "211px", md: "271px" }}
            objectFit={"cover"}
          />
        </Box>
      </Link>
      <Link href={`/movies/${id}`}>
        <Text color={color} fontSize={{ base: "10px", md: "13px" }}>
          {title.length <= 20 ? title : `${title.slice(0, 19)}...`}
        </Text>
      </Link>
      <Stack
        direction={"row"}
        spacing={{ base: "7px", md: "10px" }}
        fontSize={"10px"}
      >
        <Text color={"#B4B4B4"}>{year.slice(0, 4)}</Text>
        <FaHeart
          size={"14px"}
          onClick={toggle}
          fill={isFavorite ? "#DA0014" : "white"}
        />
        <IoMdEye size={"16px"} fill="white" />
        <Box display={"flex"} justifyContent="right" alignItems={"center"}>
          <FaStar size={16} color="#F5D835" />
          <Text color="#F5D835">{rate.toFixed(1)}</Text>
        </Box>
      </Stack>
    </Stack>
  );
}
