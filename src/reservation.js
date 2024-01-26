import React, { Component } from "react";
import logo from "./photo/moodseoul.jpg";
import userLogo from "./photo/person-grey.png";
import map from "./photo/table_map.jpg";
import "./App.css";
import { Navigate } from "react-router-dom";
import { CButton } from "@coreui/react";

class Reservation extends Component {
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

  _schedule() {
    const { screenWidth } = this.state;
    return (
      <div style={{ borderBottom: "1px solid" }}>
        <div style={{ marginTop: ".5rem" }}>
          <span
            style={{ fontSize: "1.6rem", color: "#C20019", fontWeight: "700" }}
          >
            예약
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <img
              src={map}
              alt="map"
              style={{ width: "100%", height: "100%" }}
            />
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
            >
              예약하기
            </CButton>
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
          {this._schedule()}
          {this.state.loginNav && <Navigate to={this.state.navRoute} />}
        </div>
      </div>
    );
  }
}
export default Reservation;
