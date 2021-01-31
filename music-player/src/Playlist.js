import React from 'react'
import "./Playlist.css"
function Playlist({icon}) {
    return (
        <div className="playlist">
            <img className="icon" src={icon} alt="icon"/>
        </div>
    )
}

export default Playlist
