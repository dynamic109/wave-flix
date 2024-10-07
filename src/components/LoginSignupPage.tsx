import { Button, Flex, Heading, Stack, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/wave-flix-logo2.png";
import { FaInstagram, FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import InputGroup from "./InputGroup";

export default function LoginSignupPage({
  text,
  isLoginPage,
  isSignupPage,
  name,
  email,
  password,
}: any) {
  return (
    <Flex
      p={"20px"}
      color={"white"}
      justify={{ base: "center", md: "space-between" }}
      direction={{ base: "column", md: "row" }}
      gap={{ base: "40px", md: "10px" }}
    >
      <Flex
        display={{ base: "none", lg: "flex" }}
        direction="column"
        justify={"space-between"}
        className="login-background"
        padding={"40px"}
        width={{ base: "80%", md: "50%", lg: "50%" }}
      >
        <Text width={"200px"}>
          Lights, Camera, Streaming: Your Ultimate Movie Destination!
        </Text>
        <Flex dir="column" gap={"100px"}>
          <Stack direction={"row"}>
            <Link href={"/signup"}>
              <Button
                colorScheme="transparent"
                border={isSignupPage ? "1px" : "none"}
                color={"white"}
                bg={"transparent"}
              >
                Sign Up
              </Button>
            </Link>
            <Link href={"/login"}>
              <Button
                colorScheme="transparent"
                border={isLoginPage ? "1px" : "none"}
                color={"white"}
                bg={"transparent"}
              >
                Login
              </Button>
            </Link>
          </Stack>
          <Image width={110} height={60} src={Logo} alt="Wave flix" />
        </Flex>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        alignItems={"center"}
        width={{ base: "100%", md: "40%", lg: "35%" }}
        m={"auto"}
        gap={"30px"}
        textAlign={"center"}
      >
        <Stack>
          <Heading>WAVEFLIX</Heading>
          <Text>Welcome to your best streaming website</Text>
        </Stack>
        <Stack spacing={"15px"}>
          {name && <InputGroup placeholder={name} />}
          <InputGroup placeholder={email} />
          <InputGroup placeholder={password} />
          <Text fontSize={"13px"} textAlign={"right"} color="#00ADEF">
            Forgot your password?
          </Text>
        </Stack>
        <Text>Or</Text>
        <HStack spacing={"30px"}>
          <FcGoogle size={32} />
          <MdOutlineFacebook size={32} />
          <FaMicrosoft size={32} />
        </HStack>
        <Button
          colorScheme="cyan"
          w={{ base: "500px", md: "400px" }}
          bg={"#00ADEF"}
          color={"white"}
        >
          {text}
        </Button>
        <Text>
          Do not you have an account?
          <Link color="#00ADEF" href="/signup">
            Sign Up
          </Link>
        </Text>
        <HStack spacing={"20px"}>
          <FaInstagram size={28} color="#6A6A6A" />
          <MdOutlineFacebook size={28} color="#6A6A6A" />
          <IoLogoYoutube size={28} color="#6A6A6A" />
          <FaXTwitter size={28} color="#6A6A6A" />
        </HStack>
      </Flex>
    </Flex>
  );
}
