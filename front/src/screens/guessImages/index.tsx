import { useState, useEffect } from "react";
import { TextField, Autocomplete } from "@mui/material";

import "./styles.css";
import { fetchRandomHero, fetchHeroNames } from "../../api/hero";
import type { Hero } from "../../types";

const GuessImages = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [heroNames, setHeroNames] = useState<string[]>([]);
  const [imagePath, setImagePath] = useState<string>("");
  const [guess, setGuess] = useState<string>("");

  useEffect(() => {
    const fetchHero = async () => {
      const heroRes = await fetchRandomHero();
      const heroNamesRes = await fetchHeroNames();

      if (heroRes) {
        setHero(heroRes);
        console.log(heroRes.image);
        setImagePath("http://localhost:8080/assets/" + heroRes.image);
      }

      if (heroNamesRes) setHeroNames(heroNamesRes);
    };

    fetchHero();
  }, []);

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  return (
    <div className="guess-images-container">
      <div className="guess-images-form-container">
        <img src={imagePath} alt="tom" className="hero-image" />
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
