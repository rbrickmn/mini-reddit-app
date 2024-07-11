import React from "react";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="post-card">
        <div className="card-wrapper">
          <div className="post-details">
            <div className="pic-container"></div>
            <p>
              <span className="bold-name">r/subredditname &middot;</span>{" "}
              <small className="time-posted">11hr ago</small>
            </p>
          </div>

          <h2 className="post-title">Test Heading This is a longer bit of text to see how far this card will stretch upon reaching the breakpoint. How is it doing?</h2>
        </div>
      </div>
    </div>
  );
};

export default Feed;
