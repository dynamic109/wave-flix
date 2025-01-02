import { Button } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export default function MovieListBtn() {
  return (
    <Button
      w={{ base: "fit-content", md: "222px" }}
      h={{ base: "30px", md: "66px" }}
      color="white"
      colorScheme="white"
      bg="transparent"
      fontSize={{ base: "10px", md: "20px" }}
      fontWeight={"400"}
      leftIcon={<FiPlus />}
    >
      MY LIST
    </Button>
  );
}
