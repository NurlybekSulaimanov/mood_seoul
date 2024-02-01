// Inside your App component (App.js)
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Info from "./pages/info";
import Register from "./pages/register";
import SNSRegister from "./pages/snsregister";
import Artists from "./pages/artists";
import Prereservation from "./pages/prereservation";
import Reservation from "./pages/reservation";
import Band from "./pages/band";
// import { RequireAuth } from "react-auth-kit";
import Footer from "./components/footer";

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
