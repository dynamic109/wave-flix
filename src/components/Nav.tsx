"use client";

import { Image } from "@chakra-ui/next-js";
// import JaoImg from "@/public/images/jao.png"
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import Logo from "../../public/images/wave-flix-logo.png";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

export default function Nav() {
  return (
    <Box maxWidth={"1440px"} mx={"auto"}>
      <Flex
        mb={"300px"}
        py={"10px"}
        pos={"absolute"}
        // as="nav"
        alignItems="center"
        color="white"
        w={{ base: "full", "2xl": "50%" }}
      >
        <HStack
          w="fit-content"
          pl={"70px"}
          pr={"20px"}
          color={"#B4B4B4"}
          lineHeight={"24px"}
          spacing="20px"
          display={["none", "none", "flex", "flex"]}
        >
          <Image src={Logo} alt="Wave Flix logo" w="131px" h="58px" />
          <Link href="#">New</Link>
          <Link href="#">Movies</Link>
          <Link href="#">Series</Link>
          <Link href="#">Cartoons</Link>
        </HStack>
        <Spacer />
        <AvatarGroup
          w={"fit-content"}
          spacing="1em"
          display={["none", "none", "flex", "flex"]}
        >
          <BellIcon w="32px" h="32px" />
          <Avatar
            w="32px"
            h="32px"
            bg="transparent"
            icon={<AiOutlineUser fontSize="1.5rem" />}
          />
          <Text>João M</Text>
          <Avatar
            w="32px"
            h="32px"
            src="../../public/images/jao.png"
            name="João M"
          />
        </AvatarGroup>
        <Flex
          w={"100%"}
          mx={"auto"}
          px={"10px"}
          display={["flex", "flex", "none", "none"]}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image src={Logo} alt="Wave Flix logo" w="111px" h="48px" />
          <Icon as={IoMenu} w="30px" h="30px" />
        </Flex>
      </Flex>
    </Box>
  );
}
