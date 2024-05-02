import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Home";
import { Root } from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
