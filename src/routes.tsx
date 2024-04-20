import { createBrowserRouter } from "react-router-dom";
import { HomePage, VersePage } from "./pages";
import Leyout from "./Leyout";
import VerseInfoPage from "./pages/VerseInfoPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Leyout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "verses/:id",
        children: [
          { index: true, element: <VersePage /> },
          { path: "info", element: <VerseInfoPage /> },
        ],
      },
    ],
  },
]);

export default routes;
