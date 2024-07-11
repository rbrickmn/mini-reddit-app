import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Post from "./components/Post/Post";
import "./app.css";

function App() {
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main>
        <div className="app-content">
          <Feed className="app-feed" />
        </div>
        <Sidebar className="app-sidebar" />
      </main>
    </>
  );
}

export default App;
