import { Input } from "@chakra-ui/react";

interface InputGroupProps {
  placeholder: string;
}

export default function InputGroup({ placeholder }: InputGroupProps) {
  return (
    <Input
      w={{ base: "400px", md: "500px" }}
      placeholder={placeholder}
      type={placeholder}
    />
  );
}
