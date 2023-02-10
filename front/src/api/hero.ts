import type { Hero } from "../types";

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

const fetchHeroNames = async () => {
  const res = await fetch("http://localhost:8080/heros/names", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "https://localhost:8080",
    },
  });

  const heroNames = await res.json();

  if (res.status !== 200) {
    return null;
  }

  return heroNames as string[];
};

export { fetchRandomHero, fetchHeroNames };
