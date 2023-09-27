import { createBrowserRouter } from "react-router-dom";
import  ListCard     from "./Components/ListCard"
import  Urna from "./Components/Urna"

export const router = createBrowserRouter([
  {
    path: "/urna",
    element: <Urna/>,
  },
  {
    path: "/apuracao",
    element: <ListCard />,
  },
 
]);