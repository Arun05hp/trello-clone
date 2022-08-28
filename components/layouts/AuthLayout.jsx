import React from "react";
import {
  Box,
  Container,
  Divider,
  Flex,
  Link,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

const AuthLayout = ({ isRegisterForm = false, children }) => {
  return (
    <Box height={"100vh"} overflowY="auto" bg={"lightblue"}>
      <Flex align={"center"} justifyContent={"center"} my="10">
        <Image maxW={"190px"} src="/images/trello-logo-blue.svg" alt="logo" />
      </Flex>
      <Container mb="8">
        <Box
          bg="white"
          boxShadow={"lg"}
          maxW="400px"
          margin={"0 auto"}
          py="5"
          px="8"
        >
          <Heading
            as="h5"
            size="sm"
            color="gray.500"
            textAlign={"center"}
            mb="8"
            mt="3"
          >
            {isRegisterForm
              ? "Sign up for your account"
              : "Log in to Trello Clone"}
          </Heading>

          {children}
          <Divider my="6" />
          <NextLink href={`/${isRegisterForm ? "login" : "signup"}`} passHref>
            <Link
              fontSize={"sm"}
              color="blue.500"
              textAlign="center"
              display={"block"}
            >
              {isRegisterForm
                ? "Already have an account? Log In"
                : "Sign up for an account"}
            </Link>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
