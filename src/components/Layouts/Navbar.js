import { IconButton } from "@chakra-ui/button";
import {
  Stack,
  Flex,
  Heading,
  Spacer,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../../images/logo1.png";

const Navbar = () => {
  return (
    <Stack p={5} bg={"gray.50"} as="header">
      <Flex w="full" alignItems={"center"}>
        <Heading>
          <img src={logo} alt="Logo" />
        </Heading>
        <Spacer></Spacer>
        <HStack
          spacing={10}
          mr={{ base: 0, sm: 8 }}
          as="nav"
          style={{ fontFamily: "Poppins" }}
        >
          <Text as="a" href="#" fontSize="lg">
            Login
          </Text>
          <Text as="a" href="#" fontSize="lg">
            SignUp
          </Text>
        </HStack>
      </Flex>
    </Stack>
  );
};

export default Navbar;
