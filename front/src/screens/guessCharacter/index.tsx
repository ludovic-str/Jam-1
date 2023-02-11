import { useState, useEffect, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Autocomplete } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SendIcon from "@mui/icons-material/Send";

import "./styles.css";
import { Hero } from "../../types";
import { fetchAllHeros, fetchRandomHero } from "../../api/hero";

const GuessCharacter = () => {
  const [guess, setGuess] = useState<string>("");
  const [herosList, setHeroList] = useState<Hero[]>([]);
  const [hero, setHero] = useState<Hero | null>(null);

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
    if (guess.length !== 0 && heroFound !== undefined) {
      console.log("ok");
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
        <div className="classic-answer">
          <div className="square-container">
            <div className="square">
              <div className="square-content">
                <img
                  src="https://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/Ashe.png"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="square">
              <div className="square-content">
                <img
                  src="https://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/Ashe.png"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessCharacter;
