import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    details: [],
  },
  reducers: {
    storeMovie: (state, action) => {
      state.details = [...state.details, action.payload];
    },
  },
});

export const { storeMovie } = movieSlice.actions;

export default movieSlice.reducer;
