import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./store/slice";
import SearchBar from "./components/SearchBar/SearchBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import "./app.css";

function App() {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(
    (state) => state.sidebar.isSidebarVisible
  );

  const handleToggleSidebar = () => {
    if (window.innerWidth <= 1055) {
      dispatch(toggleSidebar());
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1055 && !isSidebarVisible) {
        dispatch(toggleSidebar()); // Ensure sidebar is visible on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, isSidebarVisible]);

  return (
    <>
      <header>
        <SearchBar />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 -960 960 960"
          width="28px"
          fill="#433bff"
          className="hamburger-menu"
          onClick={handleToggleSidebar}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
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
