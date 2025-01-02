import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa";

export default function PlayBtn({ text }: any) {
  return (
    <Button
      w={{ base: "fit-content", md: "222px" }}
      h={{ base: "30px", md: "66px" }}
      borderRadius={"0"}
      color="white"
      bg="#00ADEF"
      leftIcon={<FaPlay />}
      fontSize={{ base: "10px", md: "20px" }}
      fontWeight={"400"}
    >
      {text}
    </Button>
  );
}
