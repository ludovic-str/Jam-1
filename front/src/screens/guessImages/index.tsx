import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Autocomplete, Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import "./styles.css";
import { fetchRandomHero, fetchHeroInfos } from "../../api/hero";
import type { Hero, HeroBaseInfos, HeroValidation } from "../../types";
import List from "../../components/list/"
import SendIcon from '@mui/icons-material/Send';

const GuessImages = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [heroInfos, setHeroInfos] = useState<HeroBaseInfos[]>([]);
  const [list, setList] = useState<HeroValidation[]>([]);
  const [imagePath, setImagePath] = useState<string>("");
  const [guess, setGuess] = useState<HeroBaseInfos | null>(null);

  const imageCanvas = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  const fetchHero = useCallback(async () => {
    const heroRes = await fetchRandomHero();
    const heroInfosRes = await fetchHeroInfos();

    if (heroRes && hero === null) {
      setHero(heroRes);
      setImagePath("http://localhost:8080/assets/" + heroRes.image);
    }

    if (heroInfosRes && heroInfos.length === 0) setHeroInfos(heroInfosRes);
  }, [hero, heroInfos.length]);

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

  const currentValidation = () => {
    let myList = list;
    if (guess) {
      if (hero && guess && hero.name === guess.name) {
        setList([...list, {...guess, isValid: true}])
      } else if (guess) {
        setList([...list, {...guess, isValid: false}])
      }
    }
    console.log(myList)
  };

  useEffect(() => {
    loadCanvasImage();
    fetchHero();
  }, [loadCanvasImage, fetchHero]);

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input: string;
    if (e.target.textContent) {
      input = e.target.textContent;
    } else if (e.target.value) {
      input = e.target.value;
    }
    let hero = heroInfos.find(hero => hero.name === input)
    if (hero)
      setGuess(hero);
  };

  const handleMenuClick = () => {
    navigate("/");
  };

  return (
    <>
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
          options={heroInfos.map(el => {return el.name})}
          sx={{ width: 300 }}
          onChange={(event: any, newValue: string | null) => {
            handleGuessChange(event)
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
        onClick={currentValidation}
        >
        Valider
      </Button>
      </div>
    </div>
    <List list={list} />
    </>
  );
};

export default GuessImages;
