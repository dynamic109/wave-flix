"use client";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function MovieLists({ data }: any) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination]}
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {data.map((movie: any, index: number) => (
          <SwiperSlide key={index}>
            <MovieCard
              color={"white"}
              image={movie.poster_path}
              title={movie.title}
              year={movie.release_date}
              rate={movie.vote_average}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default MovieLists;
