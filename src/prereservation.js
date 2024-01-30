import React, { Component } from "react";
import Calendar from "react-calendar";
import band from "./photo/G-Idle.jpg";
import "./App.css";
import { Navigate } from "react-router-dom";
import { CButton } from "@coreui/react";
import Header from "./header";
import Navbar from "./navbar";
import BottomNavbar from "./bottomNavbar";

class Prereservation extends Component {
  state = {
    navigate: false,
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
              borderRight: screenWidth < 600 ? "none" : ".5px solid",
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
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginBottom: "1rem",
              }}
            >
              <CButton
                onClick={() => {
                  this.setState({
                    loginNav: true,
                    navRoute: "/reservation",
                  });
                }}
                style={screenWidth >= 700 ? {} : { width: "100%" }}
              >
                예약
              </CButton>
            </div>
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
          padding: screenWidth < 700 ? "10px" : "1rem 3rem",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "920px", width: "100%" }}>
          <Header />
          {screenWidth <= 700 ? <BottomNavbar /> : <Navbar />}
          {this._schedule()}
          {this.state.loginNav && <Navigate to={this.state.navRoute} />}
        </div>
      </div>
    );
  }
}
export default Prereservation;
