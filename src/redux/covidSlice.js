// Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const fetchCovid = createAsyncThunk(
  "paragraphs/getParagraphs",
  async (country) => {
    const res = await axios(`https://covid-19.dataflowkit.com/v1/${country}`);
    return res.data;
  }
);

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    data: {},
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchCovid.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCovid.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    },
    [fetchCovid.rejected]: (state, action) => {
      state.status = "faild";
      state.error = action.error.message;
    },
  },
});

export default covidSlice.reducer;
