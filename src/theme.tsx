import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "0em",
  md: "53em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme(
  {
    fonts: {
      body: `"New Amsterdam", "poppins" sans-serif`,
    },
  },
  {
    colors: {
      skyblue: {
        50: "#e0f7ff", // Lightest variant
        100: "#b3e8ff",
        200: "#80d8ff",
        300: "#4dc8ff",
        400: "#1ab9ff",
        500: "#00ADEF", // Main shade (your hex color)
        600: "#0098d6",
        700: "#0080ad",
        800: "#006885",
        900: "#004f5e", // Darkest variant
      },
    },
  },
  breakpoints
);

export default theme;
