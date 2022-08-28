import { Button } from "@chakra-ui/react";
import React from "react";
import { useToast } from "@chakra-ui/react";
import * as yup from "yup";
import { InputField } from "../components/form/Fields";
import { Form } from "../components/form/form";
import AuthLayout from "../components/layouts/AuthLayout";
import * as userService from "../services/userService";

const schema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(6).max(32).required().label("Password"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const toast = useToast();

  async function onSubmit(values) {
    try {
      const response = await userService.register(values);
      toast({
        title: response.data,
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast({
          title: ex.response?.data ?? "Something Went Wrong!",
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  }
  return (
    <AuthLayout isRegisterForm>
      <Form
        id="login-form"
        onSubmit={(data) => {
          onSubmit(data);
        }}
        schema={schema}
        defaultValues={{
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
      >
        <InputField name="email" placeholder="Enter Email" id="email-field" />
        <InputField
          name="password"
          placeholder="Enter Password"
          id="password-field"
          type="password"
        />
        <InputField
          name="passwordConfirmation"
          placeholder="Confirm Password"
          id="passwordConfirmation-field"
          type="password"
        />

        <Button
          size={"md"}
          fontSize="sm"
          type="submit"
          colorScheme="green"
          w="full"
        >
          Register
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default Signup;
