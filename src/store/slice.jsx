// slice.jsx
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    inputValue: "",
    searchTerm: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearInput: (state) => {
      state.inputValue = "";
    },
  },
});

export const { setInputValue, setSearchTerm, clearInput } = searchSlice.actions;
export default searchSlice.reducer;
