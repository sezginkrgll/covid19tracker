import React from "react";
// Chakra-UI
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";

function Header() {
  return (
    <Box textAlign="center">
      <Flex fontSize="80px" fontFamily="fantasy">
        <Spacer />C
        <Flex>
          <svg
            width="80px"
            height="80px"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <path
              d="M18 12C18 15.3137 15.3137 18 12 18M18 12C18 8.68629 15.3137 6 12 6M18 12H21M12 18C8.68629 18 6 15.3137 6 12M12 18V21M6 12C6 8.68629 8.68629 6 12 6M6 12H3M12 6V3M21 10.5V13.5M3 10.5V13.5M10.5 3H13.5M10.5 21H13.5M17.3037 4.5752L19.425 6.69652M4.5752 17.3037L6.69652 19.425M18.3643 5.63574L16.2429 7.75706M7.75781 16.2422L5.63649 18.3635M4.5752 6.69629L6.69652 4.57497M17.3037 19.4248L19.425 17.3035M5.63574 5.63574L7.75706 7.75706M16.2422 16.2422L18.3635 18.3635M14 14H14.01M10.5 11.5H10.51M11.5 11.5C11.5 12.0523 11.0523 12.5 10.5 12.5C9.94772 12.5 9.5 12.0523 9.5 11.5C9.5 10.9477 9.94772 10.5 10.5 10.5C11.0523 10.5 11.5 10.9477 11.5 11.5Z"
              stroke="#4FD1C5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Flex>
        VID-19
        <Spacer />
      </Flex>
      <Text fontWeight="bold">
        Global and Country Wise Cases of Corona Virus
      </Text>
      <Text as="i" fontWeight="medium">
        (For a Particlar select a Country from below)
      </Text>
    </Box>
  );
}

export default Header;
