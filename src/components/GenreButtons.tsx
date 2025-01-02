import { Flex, Button } from "@chakra-ui/react";
import { RiArrowRightFill } from "react-icons/ri";

export default function GenreButtons({ genresData }: any) {
  return (
    <Flex display={"flex"} flexWrap={"wrap"} alignItems={"center"}>
      {genresData?.genres.map((genre: any) => (
        <Flex key={genre.id} mb={"20px"}>
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
      <RiArrowRightFill size={25} color="white" />
    </Flex>
  );
}
