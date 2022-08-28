import React from "react";
import { FormErrorMessage, FormLabel, FormControl } from "@chakra-ui/react";

export const FieldControl = ({
  errorText,
  label,
  children,
  id,
  isRequired,
  ...props
}) => {
  return (
    <FormControl mb={4} id={id} data-testid={id} {...props}>
      {label && (
        <FormLabel mr="5px" lineHeight={"auto"} fontSize={"md"} color={"auto"}>
          {label}
        </FormLabel>
      )}

      {children}
      <FormErrorMessage lineHeight="1rem">{errorText}</FormErrorMessage>
    </FormControl>
  );
};
