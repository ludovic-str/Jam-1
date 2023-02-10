import { useRoutes } from "react-router-dom";
import Home from "./home";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return routes;
}
