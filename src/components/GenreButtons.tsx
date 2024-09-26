import { Flex, Button } from "@chakra-ui/react";

export default function GenreButtons() {
  const GenreArr = [
    { id: 1, name: "Action" },
    { id: 1, name: "Adventure" },
    { id: 1, name: "Animation" },
    { id: 1, name: "Fiction" },
    { id: 1, name: "Heroes" },
    { id: 1, name: "Comedy" },
  ];
  return (
    <Flex>
      {GenreArr?.map((genre) => (
        <Flex key={genre.id}>
          <Button
            p={"6px 40px"}
            borderRadius={"64"}
            fontSize={"12px"}
            mr={{ sm: "10px", md: "25px" }}
            bg={"#151515"}
            color={"#FDFDFD"}
          >
            {genre.name}
          </Button>
        </Flex>
      ))}
    </Flex>
  );
}
