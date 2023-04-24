import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

function Tools() {
  const history = useNavigate();

  const SUPPORTS_MEDIA_DEVICES = "mediaDevices" in navigator;

  if (SUPPORTS_MEDIA_DEVICES) {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const cameras = devices.filter((device) => device.kind === "videoinput");

      if (cameras.length === 0) {
        throw "No camera found on this device.";
      }
      const camera = cameras[cameras.length - 1];
      navigator.mediaDevices
        .getUserMedia({
          video: {
            deviceId: camera.deviceId,
            facingMode: ["user", "environment"],
            height: { ideal: 1080 },
            width: { ideal: 1920 },
          },
        })
        .then((stream) => {
          const track = stream.getVideoTracks()[0];

          const imageCapture = new ImageCapture(track);
          const photoCapabilities = imageCapture
            .getPhotoCapabilities()
            .then(() => {
              const btnOn = document.querySelector(".turnOn");
              btnOn.addEventListener("click", function () {
                track.applyConstraints({
                  advanced: [{ torch: true }],
                });
              });
              const btnOff = document.querySelector(".turnOff");
              btnOff.addEventListener("click", function () {
                track.applyConstraints({
                  advanced: [{ torch: false }],
                });
              });
            });
        });
    });
  }
  function sendSOS() {
    if ("vibrate" in navigator) {
      navigator.vibrate([100, 50, 100, 50, 100, 50, 300, 50, 300, 50, 300, 50, 100, 50, 100, 50, 100,]);
    } else {
      // Komunikat w przypadku braku wsparcia dla funkcji vibrate()
      alert("Twoje urządzenie nie obsługuje wibracji.");
    }
  }

  return (
    <div className="about-us">
      <h1>Narzędzia Rolnika</h1>
      <button class="turnOn">Włącz Latarkę</button>
      <br />
      <br />
      <button class="turnOff">Wyłącz Latarkę</button>
      <br />
      <br />
      <button onClick={sendSOS}>Odstraszacz Kretów</button>
      <br />
      <br />
      <button onClick={() => history(-1)}>Go Back</button>
        <Link to="/about">
          <p className="about-us-button">About Us</p>
        </Link>
    </div>
  );
}

export default Tools;
