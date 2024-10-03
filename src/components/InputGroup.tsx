import { Input } from "@chakra-ui/react";

export default function InputGroup({ placeholder }: any) {
  return (
    <Input
      w={{ sm: "400px", md: "500px" }}
      placeholder={placeholder}
      type={placeholder}
    />
  );
}
