import React from "react";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="post-card">
        <div className="card-wrapper">
          <div className="pic-container"></div>
          <div className="subreddit-name">
            <span className="bold-name">r/subredditname &middot;</span>{" "}
            <span className="time-posted">11hr. ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
