import { useRoutes } from "react-router-dom";
import Home from "./home";
import GuessImages from "./guessImages";

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
  ]);

  return routes;
}
