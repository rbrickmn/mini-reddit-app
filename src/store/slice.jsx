// slice.jsx
import { createSlice, combineReducers } from "@reduxjs/toolkit";

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

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarVisible: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
  },
});

export const { setInputValue, setSearchTerm, clearInput } = searchSlice.actions;
export const { toggleSidebar } = sidebarSlice.actions;

export default combineReducers({
  search: searchSlice.reducer,
  sidebar: sidebarSlice.reducer,
});
