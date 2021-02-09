import React, { useState, useEffect } from "react";
import "./Body.css";
import Playlists from "./Playlists";
import Genres from "./Genres";
function Body({ dark }) {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    async function getGreeting() {
      var d = new Date().getHours();
      if ((d >= 16 && d <= 23) || (d >= 0 && d < 4))
        setGreeting("Good Evening");
      else if (d >= 12 && d < 16) setGreeting("Good Afternoon");
      else setGreeting("Good Morning");
    }
    getGreeting();
  },[]);

  return (
    <div className={dark ? "body body-dark" : "body"}>
      <div className="body-content">
        <h1 className="greeting">{greeting}</h1>
        <h1>GENRES</h1>
        <Genres />
        <h1>PLAYLISTS BASED ON MOOD</h1>
        <Playlists />
        <h1>RECENTLY PLAYED</h1>
        <Playlists />
        <h1>PLAYLISTS BASED ON MOOD</h1>
        <Playlists />
        <h1>RECENTLY PLAYED</h1>
        <Playlists />
      </div>
    </div>
  );
}

export default Body;
