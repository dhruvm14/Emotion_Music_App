import React, { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import "./MoodDetection.css";

function App({ popout, mood, setMood }) {
  const [timer, setTimer] = useState(false);
  useEffect(() => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(setTimer(true));
    let video = document.querySelector("video");
    video.addEventListener("play", () => {
      setTimeout(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();
        if (detections.length === 0) {
          setMood("No Face Detected");
          console.log("No Face Detected");
        } else {
          var ans = detections[0].expressions;
          var arr1 = Object.keys(ans);
          var arr2 = Object.values(ans);
          let i = arr2.indexOf(Math.max(...arr2));
          setMood(arr1[i]);
          popout();
        }
      }, 2000);
    });
  }, [popout, setMood]);
  timer && streamCamVideo();
  function streamCamVideo() {
    var constraints = { audio: false, video: { width: 480, height: 360 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        var video = document.querySelector("video");
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) {
        console.error(err.name + ": " + err.message);
      });
  }
  return (
    <div className="videoc">
      <div id="container">
        <video autoPlay={true} id="videoElement" muted></video>
      </div>
      {mood && <h1>{mood.toUpperCase()}</h1>}
    </div>
  );
}

export default App;
