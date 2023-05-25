import React from "react"
import video from "../data/video.js";
import Movie from "./Movie.js"
import Title from "./Title.js";
import Comments from "./Comments.js"



function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <Movie source={video.embedUrl}/>
      <Title title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}/>
      <Comments comments= {video.comments}/>
    </div>
  );
}

export default App;