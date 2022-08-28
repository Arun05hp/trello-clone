import { Button } from "@chakra-ui/react";
import React from "react";

import * as yup from "yup";
import { InputField } from "../components/form/Fields";
import { Form } from "../components/form/form";
import AuthLayout from "../components/layouts/AuthLayout";

const schema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(8).max(32).required().label("Password"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const signup = () => {
  function onSubmit(values) {
    console.log(values);
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

export default signup;
