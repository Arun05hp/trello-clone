import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useToast } from "@chakra-ui/react";
import * as yup from "yup";
import { InputField } from "../components/form/Fields";
import { Form } from "../components/form/form";
import AuthLayout from "../components/layouts/AuthLayout";

const schema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(8).max(32).required().label("Password"),
});

const Login = () => {
  const router = useRouter();
  const toast = useToast();
  const [apiLoading, setApiLoading] = useState(false);

  async function handleSubmit(values) {
    console.log("values", values);
    setApiLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      setApiLoading(false);

      if (result.ok && result.status === 200) router.replace("/dashboard");

      if (result.error)
        toast({
          title: result.error,
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
    } catch (ex) {
      setApiLoading(false);
      if (ex.response) {
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
    <AuthLayout>
      <Form
        id="login-form"
        onSubmit={(data) => {
          handleSubmit(data);
        }}
        schema={schema}
        defaultValues={{
          email: "",
          password: "",
        }}
      >
        <InputField name="email" placeholder="Enter Email" id="email-field" />
        <InputField
          name="password"
          placeholder="Enter Password"
          id="password-field"
          type="password"
        />
        <Button
          size={"md"}
          fontSize="sm"
          type="submit"
          colorScheme="green"
          w="full"
          isLoading={apiLoading}
        >
          Log in
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default Login;
