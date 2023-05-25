import React from "react"
import video from "../data/video.js";

function Title({title, views, createdAt, upvotes,downvotes,}) {

return (
  <> 
  
  <h3>{title}</h3>
  <div>
    <span>{views} Views</span>
    <span>| Uploaded: {createdAt}</span>
    </div>
    <div>
        <button>{upvotes}👍</button>
        <button>{downvotes}👎</button>  
  </div>
  <button>Hide Comments</button>
  </>
    )
};
export default Title;