import { Button } from "@chakra-ui/react";
import React from "react";

import * as yup from "yup";
import { InputField } from "../components/form/Fields";
import { Form } from "../components/form/form";
import AuthLayout from "../components/layouts/AuthLayout";

const schema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(8).max(32).required().label("Password"),
});

const login = () => {
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <AuthLayout>
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
        >
          Log in
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default login;
