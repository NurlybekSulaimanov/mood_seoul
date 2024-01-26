import React, { Component } from "react";
import logo from "./photo/moodseoul.jpg";
import userLogo from "./photo/person-grey.png";
import linking from "./photo/linking-park.jpg";
import beatles from "./photo/beatles.jpg";
import coldplay from "./photo/coldplay.jpg";
import queen from "./photo/queen.jpg";
import "./App.css";
import { Link, Navigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { CButton } from "@coreui/react";
class Artists extends Component {
  state = {
    loginNav: false,
    navRoute: null,
    displayedArtists: 15,
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
    const { displayedArtists } = this.state;
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
          "Freddie Mercury",
          "Brian May",
          "Roger Taylor",
          "John Deacon",
        ],
        genre: "Rock",
      },
      {
        bandName: "Led Zeppelin",
        image: linking,
        artists: [
          "Robert Plant",
          "Jimmy Page",
          "John Paul Jones",
          "John Bonham",
        ],
        genre: "Hard Rock",
      },
      {
        bandName: "Pink Floyd",
        image: beatles,
        artists: [
          "David Gilmour",
          "Roger Waters",
          "Richard Wright",
          "Nick Mason",
        ],
        genre: "Progressive Rock",
      },
      {
        bandName: "Metallica",
        image: coldplay,
        artists: [
          "James Hetfield",
          "Lars Ulrich",
          "Kirk Hammett",
          "Robert Trujillo",
        ],
        genre: "Heavy Metal",
      },
      {
        bandName: "Radiohead",
        image: queen,
        artists: [
          "Thom Yorke",
          "Jonny Greenwood",
          "Colin Greenwood",
          "Philip Selway",
        ],
        genre: "Alternative Rock",
      },
      {
        bandName: "U2",
        image: logo,
        artists: ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."],
        genre: "Rock",
      },
      {
        bandName: "Nirvana",
        image: logo,
        artists: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
        genre: "Grunge",
      },
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
          "Freddie Mercury",
          "Brian May",
          "Roger Taylor",
          "John Deacon",
        ],
        genre: "Rock",
      },
      {
        bandName: "Led Zeppelin",
        image: linking,
        artists: [
          "Robert Plant",
          "Jimmy Page",
          "John Paul Jones",
          "John Bonham",
        ],
        genre: "Hard Rock",
      },
      {
        bandName: "Pink Floyd",
        image: beatles,
        artists: [
          "David Gilmour",
          "Roger Waters",
          "Richard Wright",
          "Nick Mason",
        ],
        genre: "Progressive Rock",
      },
      {
        bandName: "Metallica",
        image: coldplay,
        artists: [
          "James Hetfield",
          "Lars Ulrich",
          "Kirk Hammett",
          "Robert Trujillo",
        ],
        genre: "Heavy Metal",
      },
      {
        bandName: "Radiohead",
        image: queen,
        artists: [
          "Thom Yorke",
          "Jonny Greenwood",
          "Colin Greenwood",
          "Philip Selway",
        ],
        genre: "Alternative Rock",
      },
      {
        bandName: "U2",
        image: logo,
        artists: ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."],
        genre: "Rock",
      },
      {
        bandName: "Nirvana",
        image: logo,
        artists: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
        genre: "Grunge",
      },
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
          "Freddie Mercury",
          "Brian May",
          "Roger Taylor",
          "John Deacon",
        ],
        genre: "Rock",
      },
      {
        bandName: "Led Zeppelin",
        image: linking,
        artists: [
          "Robert Plant",
          "Jimmy Page",
          "John Paul Jones",
          "John Bonham",
        ],
        genre: "Hard Rock",
      },
      {
        bandName: "Pink Floyd",
        image: beatles,
        artists: [
          "David Gilmour",
          "Roger Waters",
          "Richard Wright",
          "Nick Mason",
        ],
        genre: "Progressive Rock",
      },
      {
        bandName: "Metallica",
        image: coldplay,
        artists: [
          "James Hetfield",
          "Lars Ulrich",
          "Kirk Hammett",
          "Robert Trujillo",
        ],
        genre: "Heavy Metal",
      },
      {
        bandName: "Radiohead",
        image: queen,
        artists: [
          "Thom Yorke",
          "Jonny Greenwood",
          "Colin Greenwood",
          "Philip Selway",
        ],
        genre: "Alternative Rock",
      },
      {
        bandName: "U2",
        image: logo,
        artists: ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."],
        genre: "Rock",
      },
      {
        bandName: "Nirvana",
        image: logo,
        artists: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
        genre: "Grunge",
      },
    ];
    return (
      <div style={{}}>
        <div style={{ marginTop: ".5rem" }}>
          <span
            style={{ fontSize: "1.6rem", color: "#C20019", fontWeight: "700" }}
          >
            아티스트
          </span>
        </div>
        <div
          style={{
            marginBottom: "1rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {bands.slice(0, displayedArtists).map((band, index) => (
            <div
              key={index}
              style={{
                marginBottom: ".5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "95%",
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

              <Link
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                to={{ pathname: "/band", state: { bandData: band } }}
              >
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
              </Link>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {displayedArtists < bands.length && (
            <CButton
              onClick={() => {
                this.setState({ displayedArtists: displayedArtists + 15 });
              }}
              style={{
                fontSize: "1rem",
              }}
            >
              Show More
            </CButton>
          )}
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
        }}
      >
        <div style={{ maxWidth: "920px", width: "auto" }}>
          {this._header()}
          {this._navbar()}
          {this._aboutComponent()}
          {this.state.loginNav && <Navigate to={this.state.navRoute} />}
        </div>
      </div>
    );
  }
}
export default Artists;
