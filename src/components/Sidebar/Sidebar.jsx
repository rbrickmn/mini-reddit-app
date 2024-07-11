import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="subreddits-container">
        <h2>Subreddits</h2>
        <ul>
          <li>
            <p>r/subredditname</p>
          </li>
          <li>
            <p>r/subredditname</p>
          </li>
          <li>
            <p>r/subredditname</p>
          </li>
          <li>
            <p>r/subredditname</p>
          </li>
          <li>
            <p>r/subredditname</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
