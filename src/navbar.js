import React from "react";
import userLogo from "./photo/person-grey.png";

const Navbar = () => {
  const handleItemClick = (route) => {
    window.location.hash = route;
  };

  return (
    <div
      className="navbar"
      style={{
        borderBottom: "1px solid",
        borderTop: "1px solid",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "30rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            marginRight: "40px",
            fontWeight: "700",
          }}
          onClick={() => handleItemClick("/prereservation")}
        >
          <span>RESERVATION</span>
        </div>
        <div
          style={{
            cursor: "pointer",
            marginRight: "40px",
            fontWeight: "700",
          }}
          onClick={() => handleItemClick("/artists")}
        >
          <span>ARTISTS</span>
        </div>
        <div
          style={{
            cursor: "pointer",
            marginRight: "40px",
            fontWeight: "700",
          }}
          onClick={() => handleItemClick("/info")}
        >
          <span>INFO</span>
        </div>
      </div>
      <div
        style={{
          borderLeft: "1px solid",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          height: "40px",
        }}
        onClick={() => handleItemClick("/logout")}
      >
        <img
          src={userLogo}
          alt="user"
          style={{ height: "15px", width: "15px", paddingRight: ".25rem" }}
        />
        <span>Nurik</span>
      </div>
    </div>
  );
};

export default Navbar;
