import { useRoutes } from "react-router-dom";
import Home from "./home";
import GuessImages from "./guessImages";
import GuessCharacter from "./guessCharacter";
import React from "react";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/guess/images",
      element: <GuessImages />,
    },
    {
      path: "/guess/character",
      element: <GuessCharacter />,
    },
  ]);

  return routes;
}
