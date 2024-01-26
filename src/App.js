// Inside your App component (App.js)
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Info from "./info";
import Register from "./register";
import SNSRegister from "./snsregister";
import Artists from "./artists";
import Prereservation from "./prereservation";
import Reservation from "./reservation";
import Band from "./band";
// import { RequireAuth } from "react-auth-kit";
import Footer from "./footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/artists" element={<Artists />} />
        <Route path="/band" element={<Band />} />
        <Route path="/prereservation" element={<Prereservation />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/snsregister" element={<SNSRegister />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
