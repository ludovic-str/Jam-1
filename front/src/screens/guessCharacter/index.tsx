import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import "./styles.css";

const GuessCharacter = () => {
  const [guess, setGuess] = useState<string>("");

  const navigate = useNavigate();

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
    console.log(guess);
  };

  const handleMenuClick = () => {
    navigate("/");
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
        <TextField
          label="Type hero name..."
          onChange={handleGuessChange}
          value={guess}
        />
      </div>
    </div>
  );
};

export default GuessCharacter;
