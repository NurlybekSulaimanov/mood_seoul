import React, { Component } from "react";
import logo from "./photo/moodseoul.jpg";
import userLogo from "./photo/person-grey.png";
import mainPhoto from "./photo/mainPage.webp";
import minilogo from "./photo/minilogo.jpg";
import Calendar from "react-calendar";
import band from "./photo/G-Idle.jpg";
import linking from "./photo/linking-park.jpg";
import beatles from "./photo/beatles.jpg";
import coldplay from "./photo/coldplay.jpg";
import queen from "./photo/queen.jpg";
import arrow from "./photo/rightArrow.png";
import photo1 from "./photo/1.jpg";
import photo2 from "./photo/2.jpg";
import photo3 from "./photo/3.jpg";
import photo4 from "./photo/4.jpg";
import photo5 from "./photo/5.jpg";
import photo6 from "./photo/6.jpg";
// import photo7 from "./photo/7.jpg";
import "./App.css";
import { Navigate } from "react-router-dom";

class Home extends Component {
  state = {
    loginNav: false,
    navRoute: null,
    screenWidth: window.innerWidth,
  };
  componentDidUpdate() {
    console.log(this.state.shownProject);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      screenWidth: window.innerWidth,
    });
  };
  _header() {
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
          style={{ height: "80px", width: "150px", cursor: "pointer" }}
          alt="logo"
          onClick={() => {
            this.setState({
              loginNav: true,
              navRoute: "/",
            });
          }}
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
          onClick={() => {
            this.setState({
              loginNav: true,
              navRoute: "/login",
            });
          }}
        >
          Logout
        </button>
      </div>
    );
  }
  _navbar() {
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
            onClick={() => {
              this.setState({
                loginNav: true,
                navRoute: "/prereservation",
              });
            }}
          >
            <span>RESERVATION</span>
          </div>
          <div
            style={{
              cursor: "pointer",
              marginRight: "40px",
              fontWeight: "700",
            }}
            onClick={() => {
              this.setState({
                loginNav: true,
                navRoute: "/artists",
              });
            }}
          >
            <span>ARTISTS</span>
          </div>
          <div
            style={{
              cursor: "pointer",
              marginRight: "40px",
              fontWeight: "700",
            }}
            onClick={() => {
              this.setState({
                loginNav: true,
                navRoute: "/info",
              });
            }}
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
          onClick={() => {
            this.setState({
              loginNav: true,
              navRoute: "/logout",
            });
          }}
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
  }
  _aboutComponent() {
    const { screenWidth } = this.state;
    return (
      <div>
        <div
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            display: "flex",
            backgroundColor: "black",
            flexDirection: screenWidth < 600 ? "column" : "row",
            height: "400px",
          }}
        >
          <img
            src={mainPhoto}
            alt="main"
            style={{
              width: screenWidth < 600 ? "100%" : "50%",
              height: screenWidth < 600 ? "70%" : "100%",
            }}
          />
          <div
            style={{
              marginLeft: "1rem",
              alignItems: "center",
              color: "white",
              paddingTop: screenWidth < 600 ? "1rem" : "4rem",
            }}
          >
            <span style={{ color: "#C20019" }}>MOOD SEOUL</span>
            <br />
            <span style={{ fontSize: "50px" }}>맛의 여행</span>
          </div>
        </div>
        <div style={{ display: "flex", borderBottom: "1px solid" }}>
          <span
            style={{
              fontSize: "27px",
              display: "flex",
              fontWeight: "bold",
              marginTop: "-.75rem",
              letterSpacing: "-2px",
            }}
          >
            기분을 높여주세요! 감각을 돋우세요 - MOOD SEOUL에 오신 것을
            환영합니다!
            <img
              src={minilogo}
              alt="miniLogo"
              style={{
                height: "35px",
                width: "35px",
                borderRadius: "50%",
                marginLeft: ".5rem",
              }}
            />
          </span>
        </div>
      </div>
    );
  }
  _schedule() {
    const { screenWidth } = this.state;
    return (
      <div style={{ borderBottom: "1px solid" }}>
        <div style={{ marginTop: ".5rem" }}>
          <span
            style={{ fontSize: "1.6rem", color: "#C20019", fontWeight: "700" }}
          >
            스케줄
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: screenWidth < 600 ? "column" : "row",
          }}
        >
          <div
            style={{
              width: screenWidth < 600 ? "100%" : "50%",
              height: "435px",
              borderRight: ".5px solid",
            }}
          >
            <Calendar locale="en-EN" />
          </div>
          <div
            style={{
              width: screenWidth < 600 ? "100%" : "50%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "60px",
                overflow: "hidden",
                borderRight: "2px solid transparent",
                width: "100%",
              }}
            >
              <Calendar locale="en-EN" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  marginBottom: ".5rem",
                  marginTop: ".5rem",
                }}
              >
                G-Idle
              </span>
              <img
                src={band}
                alt="band"
                style={{
                  height: "65%",
                  width: "85%",
                  marginBottom: ".5rem",
                }}
              />
              <span style={{ fontSize: "1.5rem" }}>20:00 - 21:30</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  _artists() {
    const bands = [
      {
        bandName: "Linkin Park",
        image: linking,
        artists: [
          "Chester Bennington",
          "Mike Shinoda",
          "Joe Hahn",
          "Brad Delson",
          "Rob Bourdon",
        ],
        genre: "Alternative Rock",
      },
      {
        bandName: "The Beatles",
        image: beatles,
        artists: [
          "John Lennon",
          "Paul McCartney",
          "George Harrison",
          "Ringo Starr",
        ],
        genre: "Rock",
      },
      {
        bandName: "Coldplay",
        image: coldplay,
        artists: [
          "Chris Martin",
          "Guy Berryman",
          "Jonny Buckland",
          "Will Champion",
        ],
        genre: "Pop Rock",
      },
      {
        bandName: "Queen",
        image: queen,
        artists: [
          "F#C20019die Mercury",
          "Brian May",
          "Roger Taylor",
          "John Deacon",
        ],
        genre: "Rock",
      },
    ];
    return (
      <div
        style={{
          borderBottom: "1px solid",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ marginTop: ".5rem", borderBottom: "1px solid" }}>
          <span
            style={{ fontSize: "1.6rem", color: "#C20019", fontWeight: "700" }}
          >
            아티스트
          </span>
        </div>
        <div style={{ display: "flex", position: "relative" }}>
          <div style={{ paddingRight: "200px", display: "flex" }}>
            {bands.map((band, index) => (
              <div
                key={index}
                style={{
                  marginBottom: ".5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "25%",
                  fontSize: "1.15rem",
                }}
              >
                <img
                  src={band.image}
                  alt={band.bandName}
                  style={{
                    width: "100%",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginBottom: ".5px" }}>{band.genre}</p>
                <h3>{band.bandName}</h3>
                <p
                  style={{
                    textAlign: "center",
                    margin: "0 .5rem",
                    fontSize: "11px",
                  }}
                >
                  {band.artists.join(", ")}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "200px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontWeight: "700",
                borderBottom: "1px solid",
                display: "flex",
                alignItems: "center",
                height: "50px",
                cursor: "pointer",
              }}
            >
              <img
                src={arrow}
                alt="arrow"
                style={{ width: "20px", height: "10px", marginRight: "10px" }}
              />
              MONTHLY BEST
            </div>
            <div
              style={{
                fontWeight: "700",
                borderBottom: "1px solid",
                display: "flex",
                alignItems: "center",
                height: "50px",
                cursor: "pointer",
              }}
            >
              {" "}
              <img
                src={arrow}
                alt="arrow"
                style={{ width: "20px", height: "10px", marginRight: "10px" }}
              />
              NEW ARTISTS
            </div>
            <div
              style={{
                fontWeight: "700",
                borderBottom: "1px solid",
                display: "flex",
                alignItems: "center",
                height: "50px",
                cursor: "pointer",
              }}
            >
              {" "}
              <img
                src={arrow}
                alt="arrow"
                style={{ width: "20px", height: "10px", marginRight: "10px" }}
              />
              MORE
            </div>
          </div>
        </div>
      </div>
    );
  }
  _photos() {
    const redirectToWebsite = () => {
      const newWindow = window.open(
        "https://www.instagram.com/mood.seoul_/?hl=en",
        "_blank"
      );
      if (newWindow) {
        newWindow.focus();
      } else {
        console.error("Popup window blocked");
      }
    };
    const photoList = [
      { id: 1, src: photo1, alt: "Photo 1" },
      { id: 2, src: photo2, alt: "Photo 2" },
      { id: 3, src: photo3, alt: "Photo 3" },
      { id: 4, src: photo4, alt: "Photo 4" },
      { id: 5, src: photo5, alt: "Photo 5" },
      { id: 6, src: photo6, alt: "Photo 6" },
    ];
    return (
      <div
        style={{
          borderBottom: "1px solid",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <span
            style={{ fontSize: "1.6rem", color: "#C20019", fontWeight: "700" }}
          >
            사진
          </span>
          <div
            style={{
              backgroundColor: "black",
              padding: ".5rem",
              overflowX: "scroll",
              display: "flex",
            }}
          >
            {photoList.map((photo) => (
              <img
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "150px",
                  height: "200px",
                  marginLeft: ".5rem",
                  cursor: "pointer",
                }}
                onClick={redirectToWebsite}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div
        className="App"
        style={{
          padding: "1rem 3rem",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "920px", width: "100%" }}>
          {this._header()}
          {this._navbar()}
          {this._aboutComponent()}
          {this._schedule()}
          {this._artists()}
          {this._photos()}
          {this.state.loginNav && <Navigate to={this.state.navRoute} />}
        </div>
      </div>
    );
  }
}
export default Home;