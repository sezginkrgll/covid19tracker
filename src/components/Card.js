import React from "react";
// Chakra-UI
import { Box, Text } from "@chakra-ui/react";

function Card({ color, data }) {
  return (
    <Box
      bg={`${color}.100`}
      height="250px"
      borderRadius="base"
      borderColor={`${color}.600`}
      borderBottomWidth="7px"
      maxW="140px"
      p="15px"
      color="gray.700"
    >
      <Text fontSize="sm" fontWeight="medium" mb="5px">
        {data.title}
      </Text>
      <Text fontSize="lg" fontWeight="medium">
        {data.cases !== "" ? data.cases : "0"}
      </Text>
      <Text fontSize="sm" fontWeight="medium">
        Last Updated at:{" "}
        <Text as="span" fontSize="xs" color="gray.500">
          {data.lastUpdate}
        </Text>
      </Text>
      <Text fontSize="xs" fontWeight="medium" mb="5px">
        {`${data.info} ${data.country}`}
      </Text>
    </Box>
  );
}

export default Card;
