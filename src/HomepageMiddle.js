import React from "react";
import "./HomepageMiddle.css";
import Post from "./Post";
import StoriesReelsRooms from "./StoriesReelsRooms";
import WhatsOnYourMind from "./WhatsOnYourMind";
import { posts } from "./staticData";

function HomepageMiddle() {
  return (
    <div className="homepageMiddle">
      <StoriesReelsRooms />
      <WhatsOnYourMind
        profilePic={
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80"
        }
        name={"John"}
      />
      {posts.map((item) => (
        <Post
          profilePic={item.profilePic}
          userName={item.userName}
          time={item.time}
          caption={item.caption}
          imageUrl={item.imageUrl}
          type={item.type}
          noOfLikes={item.noOfLikes}
          noOfComments={item.noOfComments}
          noOfShares={item.noOfShares}
          comments={item.comments}
        />
      ))}
    </div>
  );
}

export default HomepageMiddle;
