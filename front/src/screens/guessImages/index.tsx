import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Autocomplete, Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import "./styles.css";
import { fetchRandomHero, fetchHeroNames } from "../../api/hero";
import type { Hero } from "../../types";

const GuessImages = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [heroNames, setHeroNames] = useState<string[]>([]);
  const [imagePath, setImagePath] = useState<string>("");
  const [guess, setGuess] = useState<string>("");

  const imageCanvas = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  const fetchHero = useCallback(async () => {
    const heroRes = await fetchRandomHero();
    const heroNamesRes = await fetchHeroNames();

    if (heroRes && hero === null) {
      setHero(heroRes);
      console.log(heroRes.image);
      setImagePath("http://localhost:8080/assets/" + heroRes.image);
    }

    if (heroNamesRes && heroNames.length === 0) setHeroNames(heroNamesRes);
  }, [hero, heroNames.length]);

  const loadCanvasImage = useCallback(() => {
    const canvas = imageCanvas.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;
    const img = new Image();
    img.src = imagePath;

    img.height = 450;
    img.width = 900;

    let posX = -Math.floor(Math.random() * 600);
    let posY = -Math.floor(Math.random() * 300);

    img.onload = () => {
      ctx.drawImage(img, posX, posY, img.width, img.height);
    };
  }, [imagePath]);

  useEffect(() => {
    let utterance = new SpeechSynthesisUtterance("Hello world!");
    speechSynthesis.speak(utterance);

    loadCanvasImage();
    fetchHero();
  }, [loadCanvasImage, fetchHero]);

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
    console.log(guess);
  };

  const handleMenuClick = () => {
    navigate("/");
  };

  return (
    <div className="guess-images-container">
      <Button
        variant="contained"
        startIcon={<KeyboardReturnIcon />}
        style={{ position: "absolute", top: "30px", left: "30px" }}
        onClick={handleMenuClick}
      >
        Menu
      </Button>
      <div className="guess-images-form-container">
        <canvas className="hero-image" ref={imageCanvas} />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={heroNames}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Hero name"
              onChange={handleGuessChange}
              value={guess}
            />
          )}
        />
      </div>
    </div>
  );
};

export default GuessImages;
