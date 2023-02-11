import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Autocomplete } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SendIcon from "@mui/icons-material/Send";

import "./styles.css";
import { Hero, HeroGuess } from "../../types";
import { fetchAllHeros, fetchRandomHero } from "../../api/hero";
import CharacterGuess from "../../components/CharacterGuess";
import GuessCategories from "../../components/GuessCategories";

const GuessCharacter = () => {
  const [guess, setGuess] = useState<string>("");
  const [herosList, setHeroList] = useState<Hero[]>([]);
  const [hero, setHero] = useState<Hero | null>(null);
  const [guesses, setGuesses] = useState<HeroGuess[]>([]);

  useEffect(() => {
    const fetchHeroList = async () => {
      const heroListRes = await fetchAllHeros();
      const heroRes = await fetchRandomHero();

      if (heroListRes) setHeroList(heroListRes);

      if (heroRes) setHero(heroRes);
    };

    fetchHeroList();
  }, []);

  const navigate = useNavigate();

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setGuess(e.target.value);
  };

  const handleMenuClick = () => {
    navigate("/");
  };

  const handleGuess = () => {
    const heroFound = herosList.find((el) => el.name === guess);
    console.log(guess);
    if (guess.length !== 0 && heroFound !== undefined && hero !== null) {
      const heroGuess: HeroGuess = {
        image: heroFound.image,
        gender: heroFound.gender,
        isGenderValid: heroFound.gender === hero.gender,
        species: heroFound.race,
        isSpeciesValid: heroFound.race === hero.race,
        height: heroFound.height,
        isHeightValid: heroFound.height === hero.height,
        weight: heroFound.weight,
        isWeightValid: heroFound.weight === hero.weight,
        hairColor: heroFound.hairColor,
        isHairColorValid: heroFound.hairColor === hero.hairColor,
        skinColor: heroFound.skinColor,
        isSkinColorValid: heroFound.skinColor === hero.skinColor,
        publisher: heroFound.publisher,
        isPublisherValid: heroFound.publisher === hero.publisher,
      };
      setGuesses([...guesses, heroGuess]);
      setGuess("");
    }
  };

  return (
    <div className="guess-character-container">
      <Button
        variant="contained"
        startIcon={<KeyboardReturnIcon />}
        style={{ position: "absolute", top: "30px", left: "30px" }}
        onClick={handleMenuClick}
      >
        Menu
      </Button>
      <div className="guess-character-form-container">
        <div>
          <h3 className="guess-character-title">Guess today's Super Hero</h3>
          <h3 className="guess-character-subtitle">
            Type any champion to begin.
          </h3>
        </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={herosList.map((el) => {
            return el.name;
          })}
          sx={{ width: 300 }}
          onChange={(event: any, newValue: string | null) => {
            if (newValue !== null) setGuess(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Hero name"
              onChange={handleGuessChange}
              value={guess}
            />
          )}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleGuess}
        >
          Valider
        </Button>
      </div>
      <div className="guess-character-res-container">
        {guesses.map((el, index) => (
          <CharacterGuess data={el} key={index} />
        ))}
        <GuessCategories />
      </div>
    </div>
  );
};

export default GuessCharacter;
