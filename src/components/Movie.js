import React from "react"

function Movie({source}) {
return (
    <iframe
        width="919"
        height="525"
        src={source}
        frameBorder= "0"
        allowFullScreen
        title="Thinking in React"
        />
    )
};
export default Movie;