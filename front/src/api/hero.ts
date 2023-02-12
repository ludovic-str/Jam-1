import type { Hero, HeroBaseInfos, Pedago } from "../types";

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

const fetchMarvelHeros = async () => {
  const res = await fetch("http://localhost:8080/heros/marvel", {
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

const fetchDCHeros = async () => {
  const res = await fetch("http://localhost:8080/heros/dc", {
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

const fetchRandomPedago = async () => {
  const res = await fetch("http://localhost:8080/heros/pedago", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "https://localhost:8080",
    },
  });

  const pedago = await res.json();

  if (res.status !== 200) {
    return null;
  }

  return pedago as Pedago;
};

const fetchAllPedagos = async () => {
  const res = await fetch("http://localhost:8080/heros/pedago/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "https://localhost:8080",
    },
  });

  const pedagos = await res.json();

  if (res.status !== 200) {
    return null;
  }

  return pedagos as Pedago[];
};

export { fetchRandomHero, fetchHeroInfos, fetchAllHeros, fetchMarvelHeros, fetchDCHeros, fetchRandomPedago, fetchAllPedagos };
