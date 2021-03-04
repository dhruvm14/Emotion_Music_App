import React, { useState } from "react";
import "./Topbar.css";
import Switch from "@material-ui/core/Switch";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { Link } from "react-router-dom";

const linkstyle = {
  textDecoration: "none",
  width: "0",
  height: "0"
};

function Topbar({ changeMode, dark, mood }) {
  const [emoji, setEmoji] = useState(" ");
  const ExpressionMap = () => {
    switch (mood) {
      case "neutral":
        setEmoji("😶");
        break;
      case "happy":
        setEmoji("😄");
        break;
      case "sad":
        setEmoji("😞");
        break;
      case "angry":
        setEmoji("🤬");
        break;
      case "fearful":
        setEmoji("😖");
        break;
      case "disgusted":
        setEmoji("🤢");
        break;
      case "surprised":
        setEmoji("😲");
        break;
      default:
        setEmoji(" ");
    }
    return emoji && <h3 className="mood">{emoji}</h3>;
  };
  return (
    <div className={dark ? "topbar topbar-dark" : "topbar"}>
      <img
        className="app-logo"
        src="https://i.imgur.com/VjcL8Wz.png"
        alt="App Logo"
      />
      <h1 className="app-name">Music</h1>
      {<ExpressionMap />}
      <div className="switch">
        {dark ? <WbSunnyIcon style={{ color: "white" }} /> : <WbSunnyIcon />}
        <Switch checked={dark} onChange={changeMode} />
        {dark ? (
          <NightsStayIcon style={{ color: "white" }} />
        ) : (
          <NightsStayIcon />
        )}
      </div>
      <Link to="/" style={linkstyle}>
        <img
          className="profile"
          src="https://sdk.bitmoji.com/render/panel/74199580-3d4e-4477-8454-45c0e64aaa76-225575f1-433f-442b-8b9d-d1e8cc62edfc-v1.png?transparent=1&palette=1"
          alt="Profile"
        />
      </Link>
    </div>
  );
}

export default Topbar;
