"use client";
import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function MovieCard({
  image,
  title,
  color,
}: {
  image: string;
  title: string;
  color: string;
}) {
  return (
    // <Stack mt={"50px"}>
    //   <Box flex={"2"} color={"white"}>
    //     <Image
    //       src={`https://image.tmdb.org/t/p/w500${image}`}
    //       alt={title}
    //       width={200}
    //       height={400}
    //     />
    //   </Box>
    //   <Text color={color}>{title}</Text>
    // </Stack>

    <Box>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide>
        <SwiperSlide>Slide 13</SwiperSlide>
        <SwiperSlide>Slide 14</SwiperSlide>
        <SwiperSlide>Slide 15</SwiperSlide>
        <SwiperSlide>Slide 16</SwiperSlide>
        <SwiperSlide>Slide 17</SwiperSlide>
        <SwiperSlide>Slide 18</SwiperSlide>
        <SwiperSlide>Slide 19</SwiperSlide>
      </Swiper>
    </Box>
  );
}
