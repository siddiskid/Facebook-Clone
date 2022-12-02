import React from "react";
import "./Comment.css";

function Comment({ author, authorProfilePic, comment, time, noOfLikes }) {
  return (
    <div className="globalComment">
      <img
        className="globalComment__profilePic"
        src={authorProfilePic}
        alt=""
      ></img>
      <div className="globalComment__wrapper">
        <div className="globalComment__comment">
          <div className="globalComment__commentUsername">{author}</div>
          <div className="globalComment__commentContent">{comment}</div>
        </div>
        <div className="globalComment__stats">
          <div className="globalComment__statsButtons">
            <div className="globalComment__commentLike">Like</div>
            <div className="globalComment__commentTime">{time}</div>
          </div>
          <div className="globalComment__likeCount">{noOfLikes} Likes</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
