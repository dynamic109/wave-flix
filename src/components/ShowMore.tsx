import { Box, Button } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";

export default function ShowMore() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      my={"40px"}
    >
      <Button
        color={"white"}
        width={{ sm: "450px", md: "700px", lg: "1140px" }}
        bg={"#151515"}
        textAlign={"center"}
        gap={"10px"}
        padding={"20px 0"}
      >
        <CiCirclePlus width={"30px"} height={"30px"} />
        Show more
      </Button>
    </Box>
  );
}
