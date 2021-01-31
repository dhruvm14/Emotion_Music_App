import React from "react";
import "./Body.css";
import Playlists from "./Playlists";
import Genres from "./Genres";
function Body() {
  return (
    <div className="body">
      <div className="body-content">
        <h1>GENRES</h1>
        <Genres />
        <h1>PLAYLISTS BASED ON MOOD</h1>
        <Playlists />
        <h1>RECENTLY PLAYED</h1>
        <Playlists />
      </div>
    </div>
  );
}

export default Body;
