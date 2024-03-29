import React, { Component } from "react";
import mainPhoto from "../photo/mainPage.webp";
import minilogo from "../photo/minilogo.jpg";
import Calendar from "react-calendar";
import band from "../photo/G-Idle.jpg";
import linking from "../photo/linking-park.jpg";
import beatles from "../photo/beatles.jpg";
import coldplay from "../photo/coldplay.jpg";
import queen from "../photo/queen.jpg";
import arrow from "../photo/rightArrow.png";
import photo1 from "../photo/1.jpg";
import photo2 from "../photo/2.jpg";
import photo3 from "../photo/3.jpg";
import photo4 from "../photo/4.jpg";
import photo5 from "../photo/5.jpg";
import photo6 from "../photo/6.jpg";
import photo7 from "../photo/7.jpg";
import logo from "../photo/moodseoul.jpg";
import "../App.css";
import { Navigate } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import BottomNavbar from "../components/bottomNavbar";
import { format, addDays } from "date-fns";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { isEqual } from "lodash";

class Home extends Component {
  state = {
    loginNav: false,
    navRoute: null,
    screenWidth: window.innerWidth,
    scheduleDate: new Date(),
    perf: [],
    bands: [
      {
        bandName: "G-Idle",
        image: band,
        performanceDate: new Date(),
        time: "20:30 - 22:00",
      },
      {
        bandName: "Linkin Park",
        image: linking,
        performanceDate: addDays(new Date(), 1),
        time: "20:30 - 22:00",
      },
      {
        bandName: "The Beatles",
        image: beatles,
        performanceDate: addDays(new Date(), 2),
        time: "20:30 - 22:00",
      },
      {
        bandName: "Coldplay",
        image: coldplay,
        performanceDate: addDays(new Date(), 3),
        time: "20:30 - 22:00",
      },
      {
        bandName: "Queen",
        image: queen,
        performanceDate: addDays(new Date(), 4),
        time: "20:30 - 22:00",
      },
      {
        bandName: "Led Zeppelin",
        image: linking,
        performanceDate: addDays(new Date(), 5),
        time: "20:30 - 22:00",
      },
      {
        bandName: "Pink Floyd",
        image: beatles,
        performanceDate: addDays(new Date(), 6),
        time: "20:30 - 22:00",
      },
      {
        bandName: "Metallica",
        image: coldplay,
        performanceDate: addDays(new Date(), 7),
        time: "20:30 - 22:00",
      },
      {
        bandName: "Radiohead",
        image: queen,
        performanceDate: addDays(new Date(), 8),
        time: "20:30 - 22:00",
      },
      {
        bandName: "U2",
        image: logo,
        performanceDate: addDays(new Date(), 9),
        time: "20:30 - 22:00",
      },
      {
        bandName: "Nirvana",
        image: logo,
        performanceDate: addDays(new Date(), 10),
        time: "20:30 - 22:00",
      },
    ],
    havePerfToday: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { bands, scheduleDate } = this.state;

    // Find the band matching the current scheduleDate
    const matchingBand = bands.find(
      (band) =>
        format(scheduleDate, "yyyy-MMM-dd") ===
        format(band.performanceDate, "yyyy-MMM-dd")
    );

    // Check if scheduleDate or matchingBand have changed
    if (
      scheduleDate !== prevState.scheduleDate ||
      !isEqual(matchingBand, prevState.perf)
    ) {
      this.setState({
        perf: matchingBand,
        havePerfToday: matchingBand !== undefined,
      });
    }
  }

  componentDidMount() {
    const { bands, scheduleDate, perf } = this.state;
    window.addEventListener("resize", this.handleResize);

    const matchingBand = bands.find(
      (band) =>
        format(scheduleDate, "yyyy-MMM-dd") ===
        format(band.performanceDate, "yyyy-MMM-dd")
    );
    if (matchingBand && matchingBand !== perf) {
      this.setState({
        perf: matchingBand,
        havePerfToday: matchingBand !== undefined,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      screenWidth: window.innerWidth,
    });
  };

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
          {screenWidth <= 700 && (
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                fontWeight: "bold",
                marginTop: "-.75rem",
                letterSpacing: "-2px",
              }}
            >
              MOOD SEOUL에 오신 것을 환영합니다!
              <img
                src={minilogo}
                alt="miniLogo"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                  marginLeft: ".5rem",
                  marginBottom: ".3rem",
                }}
              />
            </span>
          )}
          {screenWidth >= 700 && (
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
          )}
        </div>
      </div>
    );
  }
  _schedule() {
    const { screenWidth, scheduleDate, perf, havePerfToday } = this.state;

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
            <Calendar
              locale="en-EN"
              value={scheduleDate}
              onChange={(e) => this.setState({ scheduleDate: e })}
            />
          </div>
          <div
            style={{
              width: screenWidth < 600 ? "100%" : "50%",
              display: "flex",
              flexDirection: "column",
              height: "435px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1rem",
                height: "45px",
                borderTop: "1px solid",
                borderBottom: "1px solid",
                justifyContent: "space-around",
                userSelect: "none",
              }}
            >
              <CIcon
                icon={icon.cilChevronLeft}
                size="sm"
                onClick={() => {
                  this.setState({ scheduleDate: addDays(scheduleDate, -1) });
                }}
                style={{ cursor: "pointer" }}
              />
              <span>{format(scheduleDate, "yyyy-MMM-dd")}</span>
              <CIcon
                icon={icon.cilChevronRight}
                size="sm"
                onClick={() => {
                  this.setState({ scheduleDate: addDays(scheduleDate, 1) });
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
            {havePerfToday && (
              <div
                key={perf.bandName}
                style={{
                  display:
                    format(scheduleDate, "yyyy-MMM-dd") ===
                    format(perf.performanceDate, "yyyy-MMM-dd")
                      ? "flex"
                      : "none",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "390px",
                }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    marginBottom: ".5rem",
                    marginTop: ".5rem",
                  }}
                >
                  {perf.bandName}
                </span>
                <img
                  src={perf.image}
                  alt="band"
                  style={{
                    height: "65%",
                    width: "85%",
                    marginBottom: ".5rem",
                  }}
                />
                <span style={{ fontSize: "1.5rem" }}>{perf.time}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  _artists() {
    const { screenWidth } = this.state;
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
        <div
          style={
            screenWidth < 700
              ? { display: "flex", flexDirection: "column" }
              : { display: "flex", position: "relative" }
          }
        >
          <div
            style={
              screenWidth < 700
                ? {
                    top: "0",
                    left: "0",
                    display: "flex",
                    flexDirection: "column",
                  }
                : {
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "200px",
                    display: "flex",
                    flexDirection: "column",
                  }
            }
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
          <div
            style={
              screenWidth < 700
                ? { display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }
                : { paddingRight: "200px", display: "flex" }
            }
          >
            {bands.map((band, index) => (
              <div
                key={index}
                style={{
                  marginBottom: ".5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: screenWidth < 700 ? "100%" : "25%",
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
      { id: 7, src: photo7, alt: "Photo 7" },
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
    const { screenWidth } = this.state;
    return (
      <div
        className="App"
        style={{
          padding: screenWidth < 700 ? "5px" : "1rem 3rem",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "920px", width: "100%" }}>
          <Header />
          {screenWidth <= 700 ? <BottomNavbar /> : <Navbar />}
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
