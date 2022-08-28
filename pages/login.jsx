import { Box, Container, Flex, Image, Heading, Button } from "@chakra-ui/react";
import React from "react";
import * as yup from "yup";
import { InputField } from "../components/form/Fields";
import { Form } from "../components/form/form";

const login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Required").min(6),
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <Box height={"100vh"} overflowY="auto" bg={"lightblue"}>
      <Flex align={"center"} justifyContent={"center"} my="10">
        <Image maxW={"190px"} src="/images/trello-logo-blue.svg" alt="logo" />
      </Flex>
      <Container>
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
            Log in to Trello Clone
          </Heading>

          <Form
            id="login-form"
            onSubmit={(data) => {
              onSubmit(data);
            }}
            schema={schema}
            defaultValues={{
              email: "",
              password: "",
            }}
          >
            <InputField
              name="email"
              placeholder="Enter Email"
              id="email-field"
            />
            <InputField
              name="password"
              placeholder="Enter Password"
              id="password-field"
            />
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </Form>
        </Box>
      </Container>
    </Box>
  );
};

export default login;
