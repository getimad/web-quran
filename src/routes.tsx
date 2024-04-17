import { createBrowserRouter } from "react-router-dom";
import { HomePage, VersePage } from "./pages";
import Leyout from "./Leyout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Leyout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "verses/:id",
        element: <VersePage />,
      },
    ],
  },
]);

export default routes;
