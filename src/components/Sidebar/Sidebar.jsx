import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="nav-wrapper">
        <div className="nav-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#433bff"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
          <p className="nav-text">Home</p>
        </div>
      </div>

      <div className="subreddits-container">
        <small className="sub-title">SUBREDDITS</small>
        <ul>
          <li>
            <div className="nav-pic-container"></div>
            <p>r/subredditname</p>
          </li>
          <li>
            <div className="nav-pic-container"></div>
            <p>r/subredditname</p>
          </li>
          <li>
            <div className="nav-pic-container"></div>
            <p>r/subredditname</p>
          </li>
          <li>
            <div className="nav-pic-container"></div>
            <p>r/subredditname</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
