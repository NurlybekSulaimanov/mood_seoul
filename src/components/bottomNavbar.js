import React, { useState, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

const BottomNavbar = () => {
  const [location, setLocation] = useState(window.location.hash);

  const handleItemClick = (route) => {
    window.location.hash = route;
  };

  useEffect(() => {
    const handleHashChange = () => {
      setLocation(window.location.hash);
    };

    // Add event listener for hash change
    window.addEventListener("hashchange", handleHashChange);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const getIconColor = (route) => {
    return location === route ? "red" : "black"; // Change the colors as needed
  };

  return (
    <div
      className="bottom-navbar"
      style={{
        borderTop: "2px solid",
        padding: "15px 0px",
        position: "fixed",
        bottom: "0px",
        left: "0px",
        height: "70px",
        width: "100%",
        zIndex: "9999999",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            marginRight: "1rem",
            marginLeft: "1rem",
            fontWeight: "700",
            fontSize: "13px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "25%",
            color: getIconColor("#/prereservation"),
          }}
          onClick={() => handleItemClick("/prereservation")}
        >
          <CIcon icon={icon.cilCalendarCheck} size="xl" />
          <span>RESERVATION</span>
        </div>
        <div
          style={{
            cursor: "pointer",
            marginRight: "1rem",
            marginLeft: "1rem",
            fontWeight: "700",
            fontSize: "13px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "25%",
            color: getIconColor("#/artists"),
          }}
          onClick={() => handleItemClick("/artists")}
        >
          <CIcon icon={icon.cilHeart} size="xl" />
          <span>ARTISTS</span>
        </div>
        <div
          style={{
            cursor: "pointer",
            marginRight: "1rem",
            marginLeft: "1rem",
            fontWeight: "700",
            fontSize: "13px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "25%",
            color: getIconColor("#/info"),
          }}
          onClick={() => handleItemClick("/info")}
        >
          <CIcon icon={icon.cilClipboard} size="xl" />
          <span>INFO</span>
        </div>
        <div
          style={{
            cursor: "pointer",
            marginRight: "1rem",
            marginLeft: "1rem",
            fontWeight: "700",
            fontSize: "13px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "25%",
            color: getIconColor("#/logout"),
          }}
          onClick={() => handleItemClick("/logout")}
        >
          <CIcon icon={icon.cilUser} size="xl" />
          <span>Nurik</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
