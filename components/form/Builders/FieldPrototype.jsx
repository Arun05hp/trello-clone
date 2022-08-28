import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { FieldControl } from "./FieldControl";

export const FieldPrototype = ({
  name,
  isRequired = true,
  children,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const isInvalid = errors && errors[name]?.message;

  return (
    <FieldControl
      errorText={errors && errors[name]?.message}
      isInvalid={isInvalid}
      isRequired={isRequired}
      {...props}
    >
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return children(field);
        }}
      />
    </FieldControl>
  );
};
