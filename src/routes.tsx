import { createBrowserRouter } from "react-router-dom";
import { HomePage, ChapterPage } from "./pages";
import Leyout from "./Leyout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Leyout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "surah/:num",
        element: <ChapterPage />,
      },
    ],
  },
]);

export default routes;
