import React, { useState } from "react";
import "./Player.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Grid, Slider } from "@material-ui/core";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import MoodIcon from "@material-ui/icons/Mood";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import MoodDetection from "./MoodDetection";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import { songs } from "./songs";
var i = 0, audio;
audio = new Audio(songs[i]);
function Player({ dark, mood, setMood }) {
  const [play, setPlay] = useState(false);
  const [hover, setHover] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState(30);
  const [value2, setValue2] = useState(0);
  const [popup, setpopup] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function changePlay() {
    play ? audio.pause() : audio.play();
    setPlay((prev) => !prev);
  }
  console.log(audio);
  function popout() {
    setpopup((prev) => !prev);
  }

  function moveNext() {
    audio.pause();
    audio = null;
    console.log(audio);
    if (i < songs.length-1) i++;
    audio = new Audio(songs[i]);
    setPlay(true)
    audio.play()
  }

  function movePrev() {
    audio.pause();
    audio = null;
    console.log(audio);
    if (i > 0) i--;
    audio = new Audio(songs[i]);
    setPlay(true);
    audio.play()
  }

  function HandleClick() {
    if (clicked === false) {
      setClicked(true);
      value === 0 ? setValue2(100) : setValue2(value);
      setValue(0);
    }
    if (clicked === true) {
      setClicked(false);
      setValue(value2);
    }
  }

  function SetIcon() {
    if (value >= 60)
      return (
        <VolumeUpIcon
          className="hovericon"
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
        />
      );
    else if (value < 60 && value >= 30)
      return (
        <VolumeDownIcon
          className="hovericon"
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
        />
      );
    else if (value < 30 && value > 0)
      return (
        <VolumeMuteIcon
          className="hovericon"
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
        />
      );
    else
      return (
        <VolumeOffIcon
          className="hovericon"
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
        />
      );
  }
  audio.volume = value/100;
  return (
    <div className={dark ? "player player-dark" : "player"}>
      <div className="footer-left">
        <img
          className="song-cover"
          src="https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png"
          alt="Taylor Swift"
        />
        <p className="song-name">Lover</p>
        <p className="artist-name">Taylor Swift</p>
      </div>
      <div className="footer-center">
        <SkipPreviousIcon
          className={dark ? "hovericon ico ico-dark" : "hovericon ico"}
          onClick={movePrev}
        />
        {!play ? (
          <PlayCircleFilledIcon
            onClick={changePlay}
            fontSize="large"
            className="hovericon play"
          />
        ) : (
          <PauseCircleFilledIcon
            onClick={changePlay}
            fontSize="large"
            className="hovericon play"
          />
        )}
        <SkipNextIcon
          onClick={moveNext}
          className={dark ? "hovericon ico ico-dark" : "hovericon ico"}
        />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <div>
              <div className={popup ? "popupshow" : "popuphide"}>
                {popup && (
                  <MoodDetection
                    popout={popout}
                    mood={mood}
                    setMood={setMood}
                  />
                )}
              </div>
              <MoodIcon
                className={dark ? "hovericon ico ico-dark" : "hovericon ico"}
                fontSize="small"
                onClick={popout}
              />
            </div>
          </Grid>
          <Grid item onClick={HandleClick}>
            <SetIcon />
          </Grid>
          <Grid item xs>
            <div
              className="change-volume"
              onMouseEnter={() => setHover(false)}
              onMouseLeave={() => setHover(true)}
            >
              {hover ? (
                <hr className="rule" />
              ) : (
                <Slider
                  className="slider"
                  defaultValue={20}
                  value={value}
                  onChange={handleChange}
                  aria-labelledby="continuous-slider"
                  style={{ color: "#F50057" }}
                />
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Player;
