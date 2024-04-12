import { createBrowserRouter } from "react-router-dom";
import { HomePage, SurahPage } from "./pages";
import Leyout from "./Leyout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Leyout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "surah/:num",
        element: <SurahPage />,
      },
    ],
  },
]);

export default routes;
