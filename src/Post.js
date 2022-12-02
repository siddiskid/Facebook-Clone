import React, { useRef } from "react";
import Comment from "./Comment";
import "./Post.css";

function Post({
  profilePic,
  userName,
  time,
  caption,
  imageUrl,
  type,
  noOfLikes,
  noOfComments,
  noOfShares,
  comments,
}) {
  const commentRef = useRef();

  const openComments = () => {
    commentRef.current.classList.remove("post__commentsHidden");
    commentRef.current.classList.add("post__commentsShown");
  };
  return (
    <div className="post">
      <div className="post__details">
        <img className="post__profilePic" src={profilePic} alt=""></img>
        <div className="post__authorTime">
          <span className="post__author">{userName}</span>
          <span className="post__time">{time}</span>
        </div>
      </div>
      <div className="post__caption">{caption}</div>
      <div className="post__imageWrapper">
        <img
          className={type === "long" ? "post__imageLong" : "post__imageWide"}
          src={imageUrl}
          alt=""
        ></img>
      </div>
      <div className="post__reactionStats">
        <div className="post__emojiStats">{noOfLikes} Likes</div>
        <div className="post__commentsShares">
          <span className="post__comments">{noOfComments} Comments</span>
          <span className="post__shares">{noOfShares} Shares</span>
        </div>
      </div>
      <div className="post__grayBarWrapper">
        <div className="post__grayBar"></div>
      </div>
      <div className="post__reactionIcons">
        <div className="post__reaction like">
          <img
            className="post__iconImage"
            src="https://cdn-icons-png.flaticon.com/512/2107/2107956.png"
            alt=""
          ></img>
          <span className="post__iconText">Like</span>
        </div>
        <div className="post__reaction comment" onClick={openComments}>
          <img
            className="post__iconImage"
            src="https://aux.iconspalace.com/uploads/comment-icon-256.png"
            alt=""
          ></img>
          <span className="post__iconText">Comment</span>
        </div>
        <div className="post__reaction share">
          <img
            className="post__iconImage"
            src="https://cdn3.iconfinder.com/data/icons/basic-ui-elements-2-4-flat-style-36/512/Basic_UI_Elements_2.4_-_Flat_Style_-_36-48-512.png"
            alt=""
          ></img>
          <span className="post__iconText">Share</span>
        </div>
      </div>
      <div ref={commentRef} className="post__commentsHidden">
        <div className="post__grayBarWrapper">
          <div className="post__grayBar"></div>
        </div>
        <div className="post__comments">
          <div className="post__userAddComment">
            <img
              className="post__commentPic"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80"
              alt=""
            ></img>
            <input
              className="post__commentInput"
              placeholder="Write a comment..."
            ></input>
          </div>
          <div className="post__globalComments">
            {comments.map((item) => (
              <Comment
                author={item.author}
                authorProfilePic={item.authorProfilePic}
                comment={item.comment}
                time={item.time}
                noOfLikes={item.noOfLikes}
              />
            ))}
            <div className="post__filler"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
