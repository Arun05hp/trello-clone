import React from "react";
import { Textarea, Input } from "@chakra-ui/react";

import { FieldPrototype } from "../Builders";

export const InputField = ({
  id,
  name,
  label,
  as,
  required = true,
  disabled,
  ...props
}) => {
  return (
    <FieldPrototype
      name={name}
      isRequired={required}
      isDisabled={disabled}
      id={id}
      label={label}
    >
      {(fieldProps) => {
        const isTextarea = as === "textarea";
        return (
          <Input
            {...fieldProps}
            {...props}
            as={isTextarea ? Textarea : as}
            id={id}
          />
        );
      }}
    </FieldPrototype>
  );
};
