"use client";

import { Image } from "@chakra-ui/next-js";
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import Logo from "../../public/images/wave-flix-logo.png";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";

export default function Nav() {
  return (
    <Flex as="nav" alignItems="center" bg="black" color="white">
      <HStack spacing="30px">
        <Image src={Logo} alt="Wave Flix logo" w="131px" h="58px" bg="red" />
        <Link href="#">New</Link>
        <Link href="#">Movies</Link>
        <Link href="#">Series</Link>
        <Link href="#">Cartoons</Link>
      </HStack>
      <Spacer />
      <AvatarGroup spacing="1.2em">
        <BellIcon />
        <Avatar
          bg="red.500"
          border="1px solid"
          icon={<AiOutlineUser fontSize="1.5rem" />}
        />
        <Text>João M</Text>
        <Avatar src="../../public/images/Ellipse 1.png" name="João M" />
      </AvatarGroup>
    </Flex>
  );
}
