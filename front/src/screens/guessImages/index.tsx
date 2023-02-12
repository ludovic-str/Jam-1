import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Autocomplete, Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import "./styles.css";
import { fetchRandomHero, fetchHeroInfos, fetchMarvelHeros, fetchDCHeros } from "../../api/hero";
import type { Hero, HeroBaseInfos, HeroValidation } from "../../types";
import List from "../../components/list/"
import SendIcon from '@mui/icons-material/Send';
import LoopIcon from "@mui/icons-material/Loop";

const GuessImages = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [heroInfos, setHeroInfos] = useState<HeroBaseInfos[]>([]);
  const [list, setList] = useState<HeroValidation[]>([]);
  const [imagePath, setImagePath] = useState<string>("");
  const [guess, setGuess] = useState<HeroBaseInfos | null>(null);
  const [isReroll, setIsReroll] = useState<boolean>(false);

  const imageCanvas = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsReroll(false);
    const fetchHeroList = async () => {
      let marvel = localStorage.getItem('marvel')
      let dc = localStorage.getItem('dc')
      let heroRes;
  
      if ((marvel === 'true' || marvel === null) && (dc === 'true' || dc === null)) {
        const allHeroInfos = await fetchRandomHero();
        if (allHeroInfos)
          heroRes = allHeroInfos;
      } else if (marvel === 'true' || marvel === null) {
        const MarvelHeroInfos = await fetchMarvelHeros();
        if (MarvelHeroInfos)
          heroRes = MarvelHeroInfos;
      } else if (dc === 'true' || dc === null) {
        const DcHeroInfos = await fetchDCHeros();
        if (DcHeroInfos)
          heroRes = DcHeroInfos;
      } else {
        const allHeroInfos = await fetchRandomHero();
        if (allHeroInfos)
          heroRes = allHeroInfos;
      }
      if (heroRes) {
        console.log(heroRes)
        setHero(heroRes);
        setList([]);
        setImagePath("http://localhost:8080/assets/" + heroRes.image);
      }
    };

    fetchHeroList();
  }, [isReroll]);

  const fetchHero = useCallback(async () => {
    const heroInfosRes = await fetchHeroInfos();
    
    let marvel = localStorage.getItem('marvel')
    let dc = localStorage.getItem('dc')

    if (heroInfosRes && heroInfos.length === 0) {
      let filterHeros: HeroBaseInfos[] = heroInfosRes;
      if ((marvel === 'true' || marvel === null) && (dc === 'true' || dc === null)) {
        filterHeros = heroInfosRes;
      } else if ((marvel === 'true' || marvel === null)) {
        filterHeros = heroInfosRes.filter(hero => hero.publisher === "Marvel Comics")
      } else if (dc === 'true' || dc === null) {
        filterHeros = heroInfosRes.filter(hero => hero.publisher === "DC Comics")
      }
      setHeroInfos(filterHeros);
    }
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
    if (guess) {
      if (hero && guess && hero.name === guess.name) {
        setList([{...guess, isValid: true}, ...list])
      } else if (guess) {
        setList([{...guess, isValid: false}, ...list])
      }
    }
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

  const handleRerollClick = () => {
    setImagePath('');
    setGuess(null);
    setIsReroll(true);
  };

  const handleMenuClick = () => {
    navigate("/");
  };

  return (
    <>
    <div className="background"></div>
    <div className="guess-images-container">
      <Button
        variant="contained"
        startIcon={<KeyboardReturnIcon />}
        style={{ position: "fixed", top: "30px", left: "30px" }}
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
        <div className="button-section">
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
            onClick={currentValidation}
            >
            Validate
          </Button>
        </div>
      </div>
    </div>
    <List list={list} />
    </>
  );
};

export default GuessImages;
