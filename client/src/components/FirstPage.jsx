import React, { useEffect } from 'react';
import '../index.css';
import videoSrc from '../assets/video1.mp4';
const FirstPage = () => {
  useEffect(() => {
    const video = document.getElementById('background-video');
    if (video) {
      video.playbackRate = 0.5; 
    }
  }, []);

  return (
      <section className="home-container">
        <video id="background-video" autoPlay loop muted playsInline className="back-video">
          <source src={videoSrc} type="video/mp4" /> 
        </video>
        <section className="home-body">
          <h1> Farmer's World</h1>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </section>
      </section>
  );
};


export default FirstPage
