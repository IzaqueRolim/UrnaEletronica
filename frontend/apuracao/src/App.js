import Header from './Components/Header';
import './App.css';
import Card from './Components/Card';
import ListCard from './Components/ListCard';
import Urna from './Components/Urna';
import Routes, { router } from "./Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
