import React from "react"

function Comments ({ comments }) {
    // console.log(comments);
    let count = comments.length 

    let commentElements = comments.map((comments) => {  
        
return (
<div key={comments.id}>
    <h5>{comments.user}</h5>
    <span>{comments.comment}</span>
</div>
)}
)

return (
    <>
    <h1>{count} Comments {commentElements}</h1>
    </>
)}
      
export default Comments