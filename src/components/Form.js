import React, { useState } from "react";
// Chakra-UI
import { Select } from "@chakra-ui/react";
// Data
import COUNTRIES from "../Data/Countries";
// Redux
import { useDispatch } from "react-redux";
import { fetchCovid } from "../redux/covidSlice";
function Form() {
  const [country, setCountry] = useState("World");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setCountry(value);
    dispatch(fetchCovid(value));
  };

  return (
    <Select
      w="250px"
      color="gray.700"
      mt="40px"
      ml="auto"
      mr="auto"
      value={country}
      onChange={handleChange}
    >
      <option value="World">World</option>
      {COUNTRIES.map((item, i) => (
        <option key={i}>{item}</option>
      ))}
    </Select>
  );
}

export default Form;
