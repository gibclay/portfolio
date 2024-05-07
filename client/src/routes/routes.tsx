import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Home";
import { Root } from "./root";
import ContactPage from "./contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
