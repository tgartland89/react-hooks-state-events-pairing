import React from "react"
import video from "../data/video.js";
import Movie from "./Movie.js"
import Title from "./Title.js";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Movie source={video.embedUrl}/>
      <Title title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}/>
    </div>
  );
}

export default App;