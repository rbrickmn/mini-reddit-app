import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <main>
      <header>
        <SearchBar />
      </header>
      
      <Sidebar />
    </main>
  );
}

export default App;
