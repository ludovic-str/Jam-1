import type { Hero, HeroBaseInfos } from "../types";

const fetchRandomHero = async () => {
  const res = await fetch("http://localhost:8080/heros", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "https://localhost:8080",
    },
  });

  const hero = await res.json();

  if (res.status !== 200) {
    return null;
  }

  return hero as Hero;
};

const fetchHeroInfos = async () => {
  const res = await fetch("http://localhost:8080/heros/infos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "https://localhost:8080",
    },
  });

  const heroInfos = await res.json();

  if (res.status !== 200) {
    return null;
  }

  return heroInfos as HeroBaseInfos[];
};

const fetchAllHeros = async () => {
  const res = await fetch("http://localhost:8080/heros/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "https://localhost:8080",
    },
  });

  const heros = await res.json();

  if (res.status !== 200) {
    return null;
  }

  return heros as Hero[];
};

export { fetchRandomHero, fetchHeroInfos, fetchAllHeros };
