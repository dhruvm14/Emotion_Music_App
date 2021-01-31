import React from "react";
import "./Topbar.css";
function Topbar() {
  return (
    <div className="topbar">
      <img
        className="app-logo"
        src="https://i.imgur.com/VjcL8Wz.png"
        alt="App Logo"
      />
      <h1 className="app-name">Music</h1>
      <img
        className="profile"
        src="https://sdk.bitmoji.com/render/panel/74199580-3d4e-4477-8454-45c0e64aaa76-225575f1-433f-442b-8b9d-d1e8cc62edfc-v1.png?transparent=1&palette=1"
        alt="Profile"
      />
    </div>
  );
}

export default Topbar;
