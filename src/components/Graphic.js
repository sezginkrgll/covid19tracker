import React from "react";
// https://github.com/plotly/react-plotly.js
import Plot from "react-plotly.js";
// Chakra-UI
import { Box } from "@chakra-ui/react";
// Redux
import { useSelector } from "react-redux";
function Graphic() {
  const data = useSelector((state) => state.covid.data);

  return (
    <Box textAlign="center">
      <Plot
        data={[
          {
            type: "bar",
            marker: { color: ["#BEE3F8", "#C6F6D5", "#FED7E2", "#FEEBC8"] },
            x: ["Infected", "Recovered", "Deaths", "Active"],
            y: [
              data["Total Cases_text"],
              data["Total Recovered_text"],
              data["Total Deaths_text"],
              data["Active Cases_text"],
            ],
          },
        ]}
        layout={{
          width: 850,
          height: 500,
          title: `Current state in ${data["Country_text"]}`,
          font: {
            size: 10,
          },
        }}
      />
    </Box>
  );
}

export default Graphic;
