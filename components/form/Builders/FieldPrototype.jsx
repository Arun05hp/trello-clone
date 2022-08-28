import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { FieldControl } from "./FieldControl";

export const FieldPrototype = ({
  name,
  isRequired = true,
  children,
  ...props
}) => {
  const { control, errors } = useFormContext();
  const isInvalid = errors && errors[name];
  console.log(control, errors);
  return (
    <FieldControl
      errorText={errors && errors[name]?.message}
      isInvalid={isInvalid}
      name={name}
      isRequired={isRequired}
      {...props}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return children(field);
        }}
      />
    </FieldControl>
  );
};
