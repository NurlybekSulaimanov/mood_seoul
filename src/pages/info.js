import React, { Component } from "react";
import mainPhoto from "../photo/infoPages.jpg";
import minilogo from "../photo/minilogoInfo.jpg";
import "../App.css";
import { Navigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import Header from "../components/header";
import Navbar from "../components/navbar";
import BottomNavbar from "../components/bottomNavbar";

class Info extends Component {
  state = {
    loginNav: false,
    navRoute: null,
    screenWidth: window.innerWidth,
  };

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

  _aboutComponent() {
    const { screenWidth } = this.state;
    return (
      <div>
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
            style={{
              width: "100%",
              height: screenWidth < 700 ? "125px" : "350px",
            }}
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
            MOOD SEOUL에 대하여
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", height: "300px" }}>
          {screenWidth > 700 && (
            <div
              style={{
                borderRight: "1px solid",
                width: "120%",
                height: "100%",
              }}
            >
              <img
                src={minilogo}
                alt="minilogo"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
          <div
            style={{
              textAlign: screenWidth < 700 ? "start" : "center",
              fontSize: "1rem",
              padding: screenWidth < 700 ? "5px" : "1rem",
              lineHeight: screenWidth < 700 ? "1.4rem" : "2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>
              Mood Seoul은 매혹적이고 독특한 분위기 속에서 즐길 수 있는
              레스토랑입니다. 저희 레스토랑은 현대적이고 세련된 분위기와 함께
              다채로운 음식과 음료를 제공합니다. 각종 예약, 아티스트 공연, 정보
              등 다양한 활동으로 손님들에게 즐거운 시간을 선사합니다. Mood
              Seoul에서는 고품질의 서비스와 특별한 경험을 찾을 수 있습니다. 함께
              즐겨보세요!
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
    const { screenWidth } = this.state;
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
            주차 안내 주소
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
                  반포 한강공원 반포2주차장 (서울 서초구 신반포로11길 40
                  한강공원 반포안내센터)
                </li>
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
            {screenWidth < 700 && (
              <div style={{ display: "flex", lineHeight: "2rem" }}>
                <ul>
                  <li>영업일: 화요일 - 일요일</li>
                  <li>
                    점심: 11:30am ~ 15:00pm <br />
                    (휴식 시간: 15:00pm ~ 17:00pm)
                  </li>
                  <li>저녁: 17:00pm ~ 22:00pm</li>
                  <li>문의: 02-532-5272</li>
                </ul>
              </div>
            )}
            {screenWidth > 700 && (
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
            )}
          </div>
        </div>
      </div>
    );
  }

  _mapComponent() {
    const mapCenter = [37.512657, 126.994797];
    const parkingLot = [37.510057, 126.996007];
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
          url="https://mt0.google.com/vt/lyrs=m&hl=kr&x={x}&y={y}&z={z}"
          attribution='&copy; <a target="_blank" href="https://maps.google.com/maps?ll=36.1358642,128.0785804&amp;z=13&amp;t=m&amp;hl=ko-KR&amp;gl=US&amp;mapclient=apiv3" title="Google 지도에서 이 지역을 보려면 클릭하세요." ><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google4.png" draggable="false"></a>'
        />
        <Marker position={mapCenter} icon={customIcon}>
          <Popup>MOOD SEOUL</Popup>
        </Marker>
        <Marker position={parkingLot} icon={customIcon}>
          <Popup>주차</Popup>
        </Marker>
      </MapContainer>
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
        }}
      >
        <div style={{ maxWidth: "920px", width: "auto" }}>
          <Header />
          {screenWidth <= 700 ? <BottomNavbar /> : <Navbar />}
          {this._aboutComponent()}
          {this._mapComponent()}
          {this._additionalInfo()}
          {this.state.loginNav && <Navigate to={this.state.navRoute} />}
        </div>
      </div>
    );
  }
}
export default Info;
