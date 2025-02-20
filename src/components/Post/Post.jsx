import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <div className="post-card">
        <div className="card-wrapper">
          <div className="post-details">
            <div className="pic-container"></div>
            <p>
              <span className="bold-name">r/subredditname &middot;</span>{" "}
              <small className="time-posted">11hr ago</small>
            </p>
          </div>

          <h2 className="post-title">
            Test Heading This is a longer bit of text to see how far this card
            will stretch upon reaching the breakpoint. How is it doing?
          </h2>

          <img src="public\building.jpg" alt="" className='post-img' />

          <p className="post-text">
            This is where the text goes. Hopefully, if this looks good, we won't need to edit the sizing! I am gooing to keep typing to make the text bigger
          </p>

          <div className="button-container">
            <div className="btn">
              <button className="vote-icon">
                <svg
                  rpl=""
                  fill="currentColor"
                  height="1.1rem"
                  icon-name="upvote-outline"
                  viewBox="0 0 20 20"
                  width="1.1rem"
                  className="vote-btn"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>{" "}
                </svg>
                
                <p className="upvote-count">54</p>

                <svg
                  rpl=""
                  fill="currentColor"
                  height="1.1rem"
                  icon-name="downvote-outline"
                  viewBox="0 0 20 20"
                  width="1.1rem"
                  className="vote-btn"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path>
                </svg>
              </button>

              <button className="vote-icon comment-btn">
                <svg
                  rpl=""
                  aria-hidden="true"
                  className="vote-btn"
                  fill="currentColor"
                  height="1.1rem"
                  icon-name="comment-outline"
                  viewBox="0 0 20 20"
                  width="1.1rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>
                </svg>

                <p className="upvote-count">120</p>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Post