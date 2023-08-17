import React, { useEffect } from "react";
// Chakra-UI
import { SimpleGrid } from "@chakra-ui/react";
// Components
import Card from "./Card";
import Form from "./Form";
import Graphic from "./Graphic";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCovid } from "../redux/covidSlice";

function Container() {
  const status = useSelector((state) => state.covid.status);
  const data = useSelector((state) => state.covid.data);
  const error = useSelector((state) => state.covid.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCovid("world"));
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <>
      <SimpleGrid
        columns={[2, null, 4]}
        spacing="40px"
        maxWidth="680px"
        ml="auto"
        mr="auto"
        mt="40px"
      >
        <Card
          color="blue"
          data={{
            title: "Infected",
            country: data["Country_text"],
            cases: data["Total Cases_text"],
            lastUpdate: data["Last Update"],
            info: "Number of active cases of COVID-19",
          }}
        />
        <Card
          color="green"
          data={{
            title: "Recovered",
            country: data["Country_text"],
            cases: data["Total Recovered_text"],
            lastUpdate: data["Last Update"],
            info: "Number of recoveries from COVID-19",
          }}
        />
        <Card
          color="pink"
          data={{
            title: "Deaths",
            country: data["Country_text"],
            cases: data["Total Deaths_text"],
            lastUpdate: data["Last Update"],
            info: "Number of deaths caused by COVID-19",
          }}
        />
        <Card
          color="orange"
          data={{
            title: "Active",
            country: data["Country_text"],
            cases: data["Active Cases_text"],
            lastUpdate: data["Last Update"],
            info: "Number of Active Cases of COVID-19 US",
          }}
        />
      </SimpleGrid>
      <Form />
      <Graphic />
    </>
  );
}

export default Container;
