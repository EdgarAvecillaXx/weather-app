import React from "react";
import s from "./About.module.css";

function About() {
  return (
    <div className={s.container}>
      <div>
        <h1>About this APP</h1>
        <p className={s.info}>
          Hello World!... My Name is Edgar Avecilla, I'm Front nd Developer and
          I'm the guy who develop it. This app was one of my challenges during
          Henry Fullstack Bootcamp.
        </p>
        {""}
        <p className={s.info}>
          This app was mainly made with React 18.2. All styles were made with
          pure css. This app whas intended to be a SPA, as you can see all the
          navigation is done on a single page format, this was done with React
          router library. Finally, I want to tell you that the app is also a
          WPA, you could install the app in ypur desktop, it was made with a
          custom service worker.
        </p>
        {""}
        <p className={s.info}>
          The application works as a weather app, we can receive the weather
          from our location if we accept the browser permissions. We also have a
          search engine where we can search for the weather we want with the
          name of the city.
        </p>
        {""}
        <p className={s.info}>
          In case we want more details we can find them by clicking on the name
          section of any of the cards we have on the screen, I hope you enjoy
          browsing through it as much as I enjoyed making it.
        </p>
      </div>
    </div>
  );
}

export default About;
