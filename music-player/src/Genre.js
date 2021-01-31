import React from 'react'
import "./Genre.css";
function Genre({type}) {
    return (
        <div className="genre">
            <p>{type}</p>
        </div>
    )
}

export default Genre
