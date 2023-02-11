import { useRoutes } from "react-router-dom";
import Home from "./home";
import GuessImages from "./guessImages";
import GuessCharacter from "./guessCharacter";

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
