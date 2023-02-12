import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Autocomplete } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SendIcon from "@mui/icons-material/Send";
import LoopIcon from "@mui/icons-material/Loop";

import "./styles.css";
import { toast } from "react-toastify";

import { NumberFieldValidation, Pedago, PedagoGuess } from "../../types";
import { fetchAllPedagos, fetchRandomPedago } from "../../api/hero";
import PedagoGuessItem from "../../components/PedagoGuess";
import PedagoCategories from "../../components/PedagoCategories";

const GuessPedago = () => {
  const [guess, setGuess] = useState<string>("");
  const [pedagoList, setPedagoList] = useState<Pedago[]>([]);
  const [pedago, setPedago] = useState<Pedago | null>(null);
  const [guesses, setGuesses] = useState<PedagoGuess[]>([]);
  const [isReroll, setIsReroll] = useState<boolean>(false);

  useEffect(() => {
    setIsReroll(false);
    const fetchHeroList = async () => {
      const pedagoListRes = await fetchAllPedagos();
      const pedagoRes = await fetchRandomPedago();
      console.log(pedagoRes);

      if (pedagoListRes) setPedagoList(pedagoListRes);

      if (pedagoRes) setPedago(pedagoRes);
    };

    fetchHeroList();
  }, [isReroll]);

  const navigate = useNavigate();

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const handleMenuClick = () => {
    navigate("/");
  };

  const handleRerollClick = () => {
    setIsReroll(true);
    setGuesses([]);
  };

  const getNumberFieldValidation = (
    value: number,
    guess: number
  ): NumberFieldValidation => {
    if (value === guess) return "equal";

    return value > guess ? "more" : "less";
  };

  const handleGuess = () => {
    const pedagoFound = pedagoList.find((el) => el.name === guess);
    if (guess.length !== 0 && pedagoFound !== undefined && pedago !== null) {
      console.log(pedagoFound.favoriteIDE === pedago.favoriteIDE);
      const pedagoGuess: PedagoGuess = {
        image: pedagoFound.image,
        role: pedagoFound.role,
        isRoleValid: pedagoFound.role === pedago.role,
        mainLanguage: pedagoFound.mainLanguage,
        isMainLanguageValid: pedagoFound.mainLanguage === pedago.mainLanguage,
        gender: pedagoFound.gender,
        isGenderValid: pedagoFound.gender === pedago.gender,
        height: pedagoFound.height,
        isHeightValid: getNumberFieldValidation(
          pedago.height,
          pedagoFound.height
        ),
        favoriteIDE: pedagoFound.favoriteIDE,
        isFavoriteIDEValid: pedagoFound.favoriteIDE === pedago.favoriteIDE,
        graduationYear: pedagoFound.graduationYear,
        isGraduationYearValid: getNumberFieldValidation(
          pedago.graduationYear,
          pedagoFound.graduationYear
        ),
        hairColor: pedagoFound.hairColor,
        isHairColorValid: pedagoFound.hairColor === pedago.hairColor,
      };
      setGuesses([...guesses, pedagoGuess]);
      if (pedago.name === guess) {
        toast.success("You guessed it right!", {
          autoClose: 2000,
        });
      }
      setGuess("");
    }
  };

  return (
    <>
      <div className="background"></div>
      <div className="guess-character-container">
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          style={{ position: "fixed", top: "30px", left: "30px" }}
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
            options={pedagoList.map((el) => {
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
          <div className="character-buttons-container">
            <Button
              variant="contained"
              color="error"
              endIcon={<LoopIcon />}
              onClick={handleRerollClick}
            >
              Reroll
            </Button>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleGuess}
            >
              Validate
            </Button>
          </div>
        </div>
      </div>
      <div className="result-container">
        <div className="guess-character-res-container">
          {guesses.map((el, index) => (
            <PedagoGuessItem data={el} key={index} />
          ))}
          <PedagoCategories />
        </div>
      </div>
    </>
  );
};

export default GuessPedago;
