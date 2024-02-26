import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Artists from "./pages/artists";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reservation from "./pages/reservation";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Parse the data from the global variable declared in the <script> tag
    const userDataString = window.userData;
    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <div style={{minHeight: "100vh" }}>
      <Routes>
        {/* Pass userData as a prop to Home component */}
        <Route path="/" element={<Home userData={userData} />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/allrsrv" element={<Reservation userData={userData} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
