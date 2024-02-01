import React, { Component } from "react";
import userLogo from "../photo/person-grey.png";
import mainPhoto from "../photo/infoPages.jpg";
import minilogo from "../photo/minilogoInfo.jpg";
import "../App.css";
import { Navigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import Header from "../components/header";

class Band extends Component {
  state = {
    loginNav: false,
    navRoute: null,
  };

  componentDidMount() {
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
    return (
      <div style={{}}>
        <div style={{ marginTop: ".5rem" }}>
          <span
            style={{ fontSize: "1.6rem", color: "#C20019", fontWeight: "700" }}
          >
            정보
          </span>
        </div>
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={mainPhoto}
            alt="main"
            style={{ width: "100%", height: "350px" }}
          />
        </div>
        <div style={{ display: "flex", borderBottom: "1px solid" }}>
          <span
            style={{
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              marginBottom: ".5rem",
              fontWeight: "700",
            }}
          >
            MOOD SEOUL은 대하여
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", height: "300px" }}>
          <div
            style={{ borderRight: "1px solid", width: "120%", height: "100%" }}
          >
            <img
              src={minilogo}
              alt="minilogo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "1rem",
              padding: "1rem",
              lineHeight: "2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>
              "Mood Seoul은 매혹적이고 독특한 분위기 속에서 즐길 수 있는
              레스토랑입니다. 저희 레스토랑은 현대적이고 세련된 분위기와 함께
              다채로운 음식과 음료를 제공합니다. 각종 예약, 아티스트 공연, 정보
              등 다양한 활동으로 손님들에게 즐거운 시간을 선사합니다. Mood
              Seoul에서는 고품질의 서비스와 특별한 경험을 찾을 수 있습니다. 함께
              즐겨보세요!"
            </span>
            <span
              style={{
                fontSize: "1.35rem",
                fontWeight: "700",
                marginTop: "1rem",
              }}
            >
              Elevate Your Mood! Indulge Your Senses – Welcome to MOOD SEOUL
            </span>
          </div>
        </div>
      </div>
    );
  }

  _additionalInfo() {
    return (
      <div style={{ borderBottom: "1px solid" }}>
        <div style={{ display: "flex", borderBottom: "1px solid" }}>
          <span
            style={{
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              marginTop: "-.5rem",
              marginBottom: ".5rem",
              fontWeight: "700",
            }}
          >
            오시는 길
          </span>
        </div>
        <div style={{ margin: "1rem" }}>
          <div
            style={{
              fontSize: "1rem",
            }}
          >
            <ul style={{ listStyle: "none" }}>
              <li>주소:서울특별시 서초구 올림픽대로 2085-14 솔빛섬 1층·2층</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid",
            borderTop: "1px solid",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              marginBottom: ".5rem",
              fontWeight: "bold",
              marginTop: ".5rem",
            }}
          >
            주차안내
          </span>
        </div>
        <div style={{ margin: "1rem 1rem 0 2rem" }}>
          <div
            style={{
              fontSize: "1rem",
            }}
          >
            <div style={{ display: "flex", lineHeight: "2rem" }}>
              <ul style={{ marginRight: "6rem" }}>
                <li>
                  발렛주차 : 서울 용산구 이태원로27나길 40 IBK기업은행 이태원
                </li>
                <li>한남동 공영주차장 : 서울 용산구 이태원로 224-19</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid",
            borderTop: "1px solid",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              marginBottom: ".5rem",
              fontWeight: "bold",
              marginTop: ".5rem",
            }}
          >
            운영시간
          </span>
        </div>
        <div style={{ margin: "1rem 1rem 0 2rem" }}>
          <div
            style={{
              fontSize: "1rem",
            }}
          >
            <div style={{ display: "flex", lineHeight: "2rem" }}>
              <ul style={{ marginRight: "6rem" }}>
                <li>영업일: 화요일 - 일요일</li>
                <li>
                  점심: 11:30am ~ 15:00pm <br />
                  (휴식 시간: 15:00pm ~ 17:00pm)
                </li>
              </ul>
              <ul>
                <li>저녁: 17:00pm ~ 22:00pm</li>
                <li>문의: 02-532-5272</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _mapComponent() {
    const mapCenter = [37.512657, 126.994797];
    const mapZoom = 15;
    const customIcon = new Icon({
      iconUrl:
        "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
      iconSize: [38, 38],
    });
    return (
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{
          height: "355px",
          width: "100%",
          marginTop: "1rem",
          marginBottom: "1rem",
          borderBottom: "1px solid",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mapCenter} icon={customIcon}>
          <Popup>MOOD SEOUL</Popup>
        </Marker>
      </MapContainer>
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
          <Header />
          {this._navbar()}
          {this._aboutComponent()}
          {this._mapComponent()}
          {this._additionalInfo()}
          {this.state.loginNav && <Navigate to={this.state.navRoute} />}
        </div>
      </div>
    );
  }
}
export default Band;
