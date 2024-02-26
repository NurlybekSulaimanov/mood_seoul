import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { CButton } from "@coreui/react";
import { fetchArtists } from "../redux/actions/artistActions";
import photo1 from "../photo/1.jpg";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { format } from "date-fns";

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
    const { artists } = this.props;
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
              screenWidth < 400
                ? `repeat(1, 1fr)`
                : screenWidth < 700
                ? "repeat(2, 1fr)"
                : screenWidth < 800
                ? "repeat(3, 1fr)"
                : "repeat(4, 1fr)",
          }}
        >
          {artists.slice(0, displayedArtists).map((band, index) => (
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
                src={`/asset/frontend/src/photo/${band.image}`}
                alt={band.name}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />
              <h3>{band.name}</h3>
              <h3>
                {" "}
                공연 시간: {format(band.perf_date, "yyyy-MM-dd")}{" "}
                {band.perf_time}
              </h3>
              <p
                style={{
                  textAlign: "center",
                  margin: "0 .5rem",
                  fontSize: "14px",
                }}
              >
                <ReactReadMoreReadLess
                  charLimit={25}
                  readMoreText={"더 ▼"}
                  readLessText={"덜 ▲"}
                >
                  {band.description}
                </ReactReadMoreReadLess>
              </p>
              <p
                style={{
                  textAlign: "center",
                  margin: "0 .5rem",
                  fontSize: "14px",
                }}
              >
                {band.members}
              </p>
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
          {displayedArtists < artists.length && (
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
    return <div style={{ width: "auto" }}>{this._aboutComponent()}</div>;
  }
}

const mapStateToProps = (state) => ({
  artists: state.artists.artists,
});

export default connect(mapStateToProps, { fetchArtists })(Artists);
