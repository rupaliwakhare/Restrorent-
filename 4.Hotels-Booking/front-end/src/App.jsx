import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { useLocation } from "react-router-dom";

const App = () => {

const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
    </div>
  );
};

export default App;
