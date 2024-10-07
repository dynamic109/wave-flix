"use client";

import { Flex, Icon, VStack, Spacer } from "@chakra-ui/react";
import { ImVideoCamera } from "react-icons/im";
import { CiMusicNote1, CiStar } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaChromecast } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
const IconsArr = [
  {
    id: 1,
    name: TbSmartHome,
  },
  {
    id: 2,
    name: ImVideoCamera,
  },
  {
    id: 3,
    name: CiMusicNote1,
  },
  {
    id: 4,
    name: MdOutlineFileDownload,
  },
  {
    id: 5,
    name: FaChromecast,
  },
  {
    id: 6,
    name: CiStar,
  },
];
export default function SideBar() {
  return (
    <Flex
      pos="absolute"
      h={{ base: "420px", lg: "520px" }}
      direction="column"
      alignItems="center"
      justify="space-between"
      gap={{ base: "20px", md: "30px" }}
      mt={"70px"}
    >
      {IconsArr?.map((icon) => (
        <Flex key={icon.id}>
          <VStack spacing="20px">
            <Icon h="26px" w="26px" color="white" as={icon.name} />
          </VStack>
        </Flex>
      ))}
      <Spacer />
      <Icon h="26px" w="26px" color="white" as={IoMenu} />
    </Flex>
  );
}
