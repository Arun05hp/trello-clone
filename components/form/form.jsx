import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = ({
  onSubmit,
  schema,
  children,
  resetOnSubmit = true,
  id,
  ...options
}) => {
  const methods = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    mode: "all",
    ...options,
  });

  console.log(options);

  const handleSubmit = async (values) => {
    await onSubmit(values, methods);
    resetOnSubmit && methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form id={id} onSubmit={methods.handleSubmit(handleSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
