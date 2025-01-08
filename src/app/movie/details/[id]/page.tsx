import SideBar from "@/components/SideBar";
import { Stack } from "@chakra-ui/react";
import React from "react";

export default function MoviesDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    /* <h1>Movie Details Page</h1>
        <p>Movie ID: {id}</p> */
    <Stack bg={"black"}>
      <SideBar />
    </Stack>
  );
}
