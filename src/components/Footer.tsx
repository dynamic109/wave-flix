import {
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../public/images/wave-flix-logo2.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";

export default function Footer() {
  return (
    <Flex
      bg="#151515"
      p={{ base: "31px 50px", md: "91px 130px" }}
      direction={"column"}
      gap={"50px"}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify={{ base: "center", lg: "space-between" }}
      >
        <Flex
          direction={"column"}
          gap={"20px"}
          justify={{ base: "center", lg: "flex-start" }}
          width={{ base: "100%", lg: "318px" }}
          mb={{ base: "30px", lg: "0" }}
        >
          <Stack
            display={"flex"}
            justifyContent={{ base: "center", lg: "flex-start" }}
            alignItems={{ base: "center", lg: "flex-start" }}
          >
            <Image src={Logo} alt="wave flix" />
          </Stack>
          <Stack
            gap={"20px"}
            direction={"row"}
            display={"flex"}
            justifyContent={{ base: "center", lg: "flex-start" }}
            mb={{ base: "20px", lg: "0" }}
          >
            <FaInstagram size={28} color="#6A6A6A" />
            <MdOutlineFacebook size={28} color="#6A6A6A" />
            <IoLogoYoutube size={28} color="#6A6A6A" />
            <FaXTwitter size={28} color="#6A6A6A" />
          </Stack>
        </Flex>
        <Flex
          justify={{ base: "center", lg: "space-between" }}
          gap={"40px"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            justify={{ base: "center", lg: "space-between" }}
            color={"#B4B4B4"}
            gap={"50px"}
          >
            <Stack>
              <Heading
                mb={"20px"}
                color={"white"}
                fontSize={{ base: "13px", lg: "18px" }}
              >
                About us
              </Heading>
              <Text fontSize={"13px"}>Contact US</Text>
              <Text fontSize={"13px"}>Investors</Text>
              <Text fontSize={"13px"}>Careers</Text>
              <Text fontSize={"13px"}>Blog</Text>
              <Text fontSize={"13px"}>FAQ</Text>
            </Stack>
            <Stack>
              <Heading
                mb={"20px"}
                color={"white"}
                fontSize={{ base: "13px", lg: "18px" }}
              >
                For Users
              </Heading>
              <Text fontSize={"13px"}>Sign Up</Text>
              <Text fontSize={"13px"}>Support Center</Text>
              <Text fontSize={"13px"}>Request Movie</Text>
              <Text fontSize={"13px"}>Invite Friend</Text>
            </Stack>
            <Stack>
              <Heading
                mb={"20px"}
                color={"white"}
                fontSize={{ base: "13px", lg: "18px" }}
              >
                Content
              </Heading>
              <Text fontSize={"13px"}>Movies</Text>
              <Text fontSize={"13px"}>Series</Text>
              <Text fontSize={"13px"}>Actors</Text>
              <Text fontSize={"13px"}>Writers</Text>
            </Stack>
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={{ base: "center", lg: "flex-start" }}
            width={{ base: "100%", lg: "300px" }}
          >
            <Text color={"#B4B4B4"} mb={"30px"}>
              Sign up with our Newsletter
            </Text>
            <InputGroup width={"250px"}>
              <Input
                border={"none"}
                color={"white"}
                type="tel"
                placeholder="Email here"
                bg={"black"}
                fontSize={"12px"}
              />
              <InputRightElement bg={"white"}>
                <PiTelegramLogoDuotone color="black" />
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
      </Flex>
      <Container maxW={"450px"}>
        <Text mb={"30px"} textAlign={"center"} color={"#B4B4B4"}>
          Website developed by Dynamic for personal and non-commercial purposes,
          follow me on social media
        </Text>
        <Stack
          direction={"row"}
          spacing={"30px"}
          display={"flex"}
          justify={"center"}
        >
          <FaInstagram size={24} color="white" />
          <FaLinkedinIn size={24} color="white" />
          <VscGithub size={24} color="white" />
        </Stack>
      </Container>
    </Flex>
  );
}
