"use client";
import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

export default function MovieCard({
  image,
  title,
  year,
  color,
  rate,
}: {
  image: string;
  title: string;
  year: any;
  color: string;
  rate: number;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggle() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Stack mt={"50px"}>
      <Box flex={"2"} color={"white"} width={"100%"}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
          width={{ sm: "122px", md: "182px" }}
          height={{ sm: "211px", md: "271px" }}
          objectFit={"cover"}
        />
      </Box>
      <Text color={color} fontSize={{ sm: "10px", md: "13px" }}>
        {title.length <= 20 ? title : `${title.slice(0, 19)}...`}
      </Text>
      <Stack
        direction={"row"}
        spacing={{ sm: "7px", md: "10px" }}
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
