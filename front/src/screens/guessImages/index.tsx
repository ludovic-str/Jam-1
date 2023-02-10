import { useState, useEffect, useRef, useCallback } from "react";
import { TextField, Autocomplete } from "@mui/material";

import "./styles.css";
import { fetchRandomHero, fetchHeroNames } from "../../api/hero";
import type { Hero } from "../../types";

const GuessImages = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [heroNames, setHeroNames] = useState<string[]>([]);
  const [imagePath, setImagePath] = useState<string>("");
  const [guess, setGuess] = useState<string>("");

  const imageCanvas = useRef<HTMLCanvasElement | null>(null);

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
    img.onload = () => {
      ctx.drawImage(img, 0, 0, img.width, img.height);
    };
  }, [imagePath]);

  useEffect(() => {
    fetchHero();
    loadCanvasImage();
  }, [loadCanvasImage, fetchHero]);

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  return (
    <div className="guess-images-container">
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
