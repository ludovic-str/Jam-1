import React, { useEffect, useMemo, useState } from "react";

import BatmanGif from "../../assets/batman.gif";
import BatmanSong from "../../assets/batman.mp3";
import "./styles.css";

const EasterEgg = () => {
  const [easterEggClass, setEasterEggClass] = useState("easter-egg");
  const pattern = useMemo(() => {
    const pattern = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    return pattern;
  }, []);

  const audio = new Audio(BatmanSong);

  useEffect(() => {
    let index = 0;
    const handler = (e: KeyboardEvent) => {
      if (e.key === pattern[index]) {
        index++;
        if (index === pattern.length) {
          console.log("event");
          audio.play();
          setEasterEggClass("easter-egg easter-egg-animation");
        }
      } else {
        index = 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [pattern]);

  return (
    <>
      <img src={BatmanGif} alt="batman" className={easterEggClass}></img>
    </>
  );
};

export default EasterEgg;
