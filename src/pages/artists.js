import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../photo/moodseoul.jpg";
import linking from "../photo/linking-park.jpg";
import beatles from "../photo/beatles.jpg";
import coldplay from "../photo/coldplay.jpg";
import queen from "../photo/queen.jpg";
import "../App.css";
import { Link, Navigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { CButton } from "@coreui/react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import BottomNavbar from "../components/bottomNavbar";
import { fetchArtists } from "../redux/actions/artistActions";

class Artists extends Component {
  state = {
    loginNav: false,
    navRoute: null,
    displayedArtists: 15,
    screenWidth: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.props.fetchArtists();
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
    const { displayedArtists, screenWidth } = this.state;
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
      <div>
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
            gridTemplateColumns:
              screenWidth < 700 ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
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
    const { screenWidth } = this.state;
    console.log(this.props);
    return (
      <div
        className="App"
        style={{
          padding: screenWidth < 700 ? "10px" : "1rem 3rem",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid",
        }}
      >
        <div style={{ maxWidth: "920px", width: "auto" }}>
          <Header />
          {screenWidth <= 700 ? <BottomNavbar /> : <Navbar />}
          {this._aboutComponent()}
          {this.state.loginNav && <Navigate to={this.state.navRoute} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bands: state.artists.bands,
  artists: state.artists.artists,
  loading: state.artists.loading,
  error: state.artists.error,
});

export default connect(mapStateToProps, { fetchArtists })(Artists);
