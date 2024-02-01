import React from "react";
import logo from "../photo/moodseoul.jpg";

const Header = () => {

  const handleLogoClick = () => {
    window.location.hash = "/";
  };

  const handleLogoutClick = () => {
    window.location.hash = "/login";
  };

  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        style={{ height: "80px", width: "123px", cursor: "pointer" }}
        alt="logo"
        onClick={handleLogoClick}
      />
      <button
        style={{
          backgroundColor: "transparent",
          height: "30px",
          width: "70px",
          border: ".5px solid",
          borderRadius: "3rem",
          cursor: "pointer",
          margin: "1.5rem",
          fontSize: "12px",
        }}
        onClick={handleLogoutClick}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
