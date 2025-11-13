import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {

const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh">
        <Routes>
          <Route path='/' elemet={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
