import { Button } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

export default function PlayBtn({ text }: any) {
  return (
    <Button
      bg="#00ADEF"
      color={"white"}
      leftIcon={<FaPlay />}
      colorScheme="blue.700"
      fontSize={{ base: "10px", md: "15px" }}
    >
      {text}
    </Button>
  );
}
