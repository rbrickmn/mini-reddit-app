import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import "./app.css";

function App() {
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <div className="app-content">
        <Feed className="app-feed" />
      </div>
      <Sidebar className="app-sidebar" />
    </>
  );
}

export default App;
