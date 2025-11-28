import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import AllRooms from "./Pages/AllRooms.jsx";
import RoomDetails from "./Pages/RoomDetails.jsx"
import MyBookings from "./Pages/MyBookings.jsx";
import HotelReg from "./Components/HotelReg.jsx";
import Layout from "./Pages/hotelOwner/Layout.jsx";


const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
     { false && <HotelReg />}
      <div className="min-h-[70vh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Layout/>}>

          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
