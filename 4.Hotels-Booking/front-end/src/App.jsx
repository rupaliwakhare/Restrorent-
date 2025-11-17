import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer.jsx";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
