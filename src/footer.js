import React from "react";
import logo from "./photo/moodseoul.jpg";
import insta from "./photo/insta.png";
import facebook from "./photo/facebook.png";
import youtube from "./photo/youtube.png";

const Footer = () => {
  return (
    <div
      className="footerContainer"
      style={{
        padding: "1rem 3rem",
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
            width: "1324px",
          }}
        >
          <img
            src={logo}
            style={{ height: "100px", width: "175px", marginRight: "1rem" }}
            alt="logo"
          />
          <div style={{ fontSize: "12px" }}>
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
              <span style={{ marginRight: ".25rem", fontWeight: "bold" }}>
                BUSINESS NUMBER:
              </span>
              <span>142-81-83435</span>
            </div>
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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ width: "max-content" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                marginRight: "1rem",
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
              style={{ height: "40px", width: "40px" }}
            />
            <img
              src={youtube}
              alt="youtube"
              style={{ height: "40px", width: "40px" }}
            />
            <img
              src={insta}
              alt="insta"
              style={{ height: "40px", width: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
