"use client";
import HomeIcon from "../../public/images/home-icon.png"
import VideoIcon from "../../public/images/video-icon.png"
import MusicIcon from "../../public/images/music-icon.png"
import DownloadIcon from "../../public/images/download-icon.png"
import ChromecastIcon from "../../public/images/chromecast-icon.png"
import StarIcon from "../../public/images/star-icon.png"
import MenuIcon from "../../public/images/menu-icon.png"
import { Flex, Icon, VStack, Spacer, Image} from "@chakra-ui/react";

export default function SideBar() {
  return (
    <Flex direction="column">
      <VStack>
        <Image src="../../public/images/home-icon.png"/>
      </VStack>
      <Spacer />
      <Icon />
    </Flex>
  );
}
