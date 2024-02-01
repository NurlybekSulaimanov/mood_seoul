import React, { useEffect, useState } from "react";
import logo from "../photo/moodseoul.jpg";
import insta from "../photo/insta.png";
import facebook from "../photo/facebook.png";
import youtube from "../photo/youtube.png";

const Footer = () => {
  const redirectToWebsite = (website) => {
    const newWindow = window.open(website, "_blank");
    if (newWindow) {
      newWindow.focus();
    } else {
      console.error("Popup window blocked");
    }
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div
      className="footerContainer"
      style={{
        padding: screenWidth < 700 ? "5px 5px 80px 5px" : "1rem 3rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "920px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "100px",
            display: "flex",
            alignItems: "center",
            marginTop: "-5px",
          }}
        >
          {screenWidth > 700 && (
            <img
              src={logo}
              style={{ height: "100px", width: "154px", marginRight: "1rem" }}
              alt="logo"
            />
          )}
          <div style={{ fontSize: "12px", marginBottom: "10px" }}>
            <div style={{ marginBottom: ".5rem" }}>
              <span
                style={{
                  marginRight: ".5rem",
                  fontWeight: "bold",
                }}
              >
                COMPANY:
              </span>
              <span style={{ marginRight: ".5rem" }}>
                Winenara Ivy Jeil Wine Seller Branch
              </span>
              {screenWidth < 700 && <br />}
              <span style={{ marginRight: ".25rem", fontWeight: "bold" }}>
                BUSINESS NUMBER:
              </span>
              <span>142-81-83435</span>
            </div>
            {screenWidth > 700 && (
              <div>
                <div style={{ marginBottom: ".5rem" }}>
                  <span style={{ marginRight: ".5rem", fontWeight: "bold" }}>
                    ADDRESS:
                  </span>
                  <span style={{ marginRight: ".5rem" }}>
                    KR 서울특별시 서초구 올림픽대로 2085-14 솔빛섬 1층·2층
                  </span>
                  <span style={{ marginRight: ".25rem", fontWeight: "bold" }}>
                    CONTACT:
                  </span>
                  <span>02-532-5272</span>
                </div>
                <div style={{ marginBottom: ".5rem" }}>
                  <span style={{ marginRight: ".5rem", fontWeight: "bold" }}>
                    WORKING HOURS:
                  </span>
                  <span>평일 18:00 - 24:00</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: screenWidth < 700 ? "100%" : "max-content",
              display: "flex",
              alignItems: screenWidth < 700 ? "flex-end" : "flex-start",
              flexDirection: screenWidth < 700 ? "column" : "row",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                marginRight: screenWidth < 700 ? "0" : "1rem",
              }}
            >
              서비스이용약관
            </span>{" "}
            <span style={{ fontSize: "12px", fontWeight: "bold" }}>
              개인정보취급방침
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={facebook}
              alt="facebook"
              style={{ height: "40px", width: "40px", cursor: "pointer" }}
              onClick={() => {
                const website =
                  "https://www.facebook.com/100076330745443/photos/";
                redirectToWebsite(website);
              }}
            />
            <img
              src={youtube}
              alt="youtube"
              style={{ height: "40px", width: "40px", cursor: "pointer" }}
              onClick={() => {
                const website = "https://www.youtube.com/watch?v=H0hzoXQg-XQ";
                redirectToWebsite(website);
              }}
            />
            <img
              src={insta}
              alt="insta"
              style={{ height: "40px", width: "40px", cursor: "pointer" }}
              onClick={() => {
                const website = "https://www.instagram.com/mood.seoul_/?hl=en";
                redirectToWebsite(website);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
