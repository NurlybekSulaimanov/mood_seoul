import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import photo1 from "../photo/1.jpg";
import "../App.css";
import { format, addDays } from "date-fns";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { isEqual } from "lodash";
import { fetchArtists } from "../redux/actions/artistActions";
import { bookTables } from "../redux/actions/bookingAction";
import { getUserSeats } from "../redux/actions/userSeatsActions";
import { cancelBooking } from "../redux/actions/bookingCancelAction";
import { Swiper, SwiperSlide } from "swiper/react";
import tableIcon from "../photo/table.png";
import barIcon from "../photo/bar.png";
import windowIcon from "../photo/window.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Swiper styles
import "swiper/css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.swiperRef = React.createRef();
  }

  state = {
    showAbout: false,
    screenWidth: window.innerWidth,
    scheduleDate: new Date(),
    perf: [],
    havePerfToday: false,
    people: null,
    time: null,
    table: null,
    request: "",
    requestInput: false,
    tableEmpty: false,
    peopleEmpty: false,
    timeEmpty: false,
    userId: null,
    userName: null,
    phone: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { scheduleDate, perf } = this.state;
    const { artists } = this.props;
    const matchingBand = artists.find(
      (band) =>
        format(scheduleDate, "yyyy-MMM-dd") ===
        format(band.perf_date, "yyyy-MMM-dd")
    );
    if (
      scheduleDate !== prevState.scheduleDate ||
      !isEqual(matchingBand, perf)
    ) {
      this.setState({
        perf: matchingBand,
        havePerfToday: matchingBand !== undefined,
      });
    }
    if (this.props.userData && !this.state.userId && this.props.artists) {
      this.setState({
        userId: this.props.userData.user_id,
        userName: this.props.userData.user_nm,
        phone: this.props.userData.phone,
      });
    }
  }

  componentDidMount() {
    const { scheduleDate, perf } = this.state;
    const { artists } = this.props;
    window.addEventListener("resize", this.handleResize);
    this.props.fetchArtists();
    const matchingBand = artists.find(
      (band) =>
        format(scheduleDate, "yyyy-MMM-dd") ===
        format(band.perf_date, "yyyy-MMM-dd")
    );
    if (matchingBand && matchingBand !== perf) {
      this.setState({
        perf: matchingBand,
        havePerfToday: matchingBand !== undefined,
      });
    }
    // Retrieve the toast message from localStorage
    const toastMessage = localStorage.getItem("toastMessage");

    // Check if a toast message exists
    if (toastMessage) {
      // Display the toast message
      toast.success(toastMessage);

      // Clear the toast message from localStorage
      localStorage.removeItem("toastMessage");
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

  _schedule() {
    const { screenWidth, scheduleDate, perf, havePerfToday, showAbout } =
      this.state;

    return (
      <div
        style={{
          borderBottom: "1px solid",
          display: showAbout ? "none" : "block",
        }}
      >
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
                style={{ cursor: "pointer", height: "20px", width: "20px" }}
              />
              <span>{format(scheduleDate, "yyyy-MMM-dd")}</span>
              <CIcon
                icon={icon.cilChevronRight}
                size="sm"
                onClick={() => {
                  this.setState({ scheduleDate: addDays(scheduleDate, 1) });
                }}
                style={{ cursor: "pointer", height: "20px", width: "20px" }}
              />
            </div>
            {havePerfToday && (
              <div
                key={perf.name}
                style={{
                  display:
                    format(scheduleDate, "yyyy-MMM-dd") ===
                    format(perf.perf_date, "yyyy-MMM-dd")
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
                  {perf.name}
                </span>
                <div
                  style={{
                    height: "65%",
                    maxWidth: "85%",
                    marginBottom: ".5rem",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`/asset/frontend/src/photo/${perf.image}`}
                    alt="band"
                    style={{ height: "100%" }}
                  />
                </div>
                <span style={{ fontSize: "1.5rem" }}>{perf.perf_time}</span>
                <div
                  style={{
                    fontSize: "1rem",
                    borderRadius: "2rem",
                    width: "100px",
                    height: "30px",
                    border: "1px solid",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: ".5rem",
                  }}
                >
                  <button
                    onClick={() => {
                      this.props.getUserSeats(this.state.userId, perf.band_id);
                      this.setState({ showAbout: true });
                    }}
                  >
                    Reservation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  _reservation() {
    const rsrv =
      this.props.userSeats && this.props.userSeats.length > 0
        ? this.props.userSeats[0]
        : null;
    const {
      screenWidth,
      scheduleDate,
      perf,
      havePerfToday,
      showAbout,
      request,
      people,
      time,
      table,
      timeEmpty,
      tableEmpty,
      peopleEmpty,
    } = this.state;
    const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
    const timeSlots = [];
    for (let hour = 5; hour <= 8; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        const formattedMinute = minute === 0 ? "00" : minute;
        const time = `${formattedHour}:${formattedMinute}`;
        timeSlots.push(time);
      }
    }
    return (
      <div
        style={{
          borderBottom: "1px solid",
          display: showAbout ? "block" : "none",
        }}
      >
        <div style={{ marginTop: ".5rem", textAlign: "center" }}>
          <span
            style={{ fontSize: "1.6rem", color: "#C20019", fontWeight: "700" }}
          >
            예약
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
              display: "flex",
              flexDirection: "column",
              height: "435px",
            }}
          >
            {havePerfToday && (
              <div
                key={perf.name}
                style={{
                  display:
                    format(scheduleDate, "yyyy-MMM-dd") ===
                    format(perf.perf_date, "yyyy-MMM-dd")
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
                  {perf.name}
                </span>
                <div
                  style={{
                    height: "100%",
                    maxWidth: "100%",
                    marginBottom: ".5rem",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`/asset/frontend/src/photo/${perf.image}`}
                    alt="band"
                    style={{ height: "100%" }}
                  />
                </div>
                <span style={{ fontSize: "1.5rem" }}>{perf.perf_time}</span>
                <span style={{ marginBottom: ".5rem", textAlign: "center" }}>
                  {perf.description}
                </span>
                <span style={{ textAlign: "center" }}>{perf.members}</span>
              </div>
            )}
          </div>
          <div
            style={{
              width: screenWidth < 600 ? "100%" : "50%",
              display: !Array.isArray(this.props.userSeats) ? "flex" : "none",
              flexDirection: "column",
              height: "435px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  width: "5rem",
                  color: this.state.people
                    ? "#AC8B68"
                    : peopleEmpty
                    ? "red"
                    : "black",
                }}
              >
                인원수
              </div>
              {/* Map over the numbers array and create a round div for each number */}
              <Swiper slidesPerView={screenWidth < 1000 ? 6 : 10}>
                {numbers.map((number) => (
                  <SwiperSlide key={number}>
                    <div
                      key={number}
                      className="round-div"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor:
                          this.state.people === number ? "#AC8B68" : "#ccc",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "10px",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        this.setState({ people: number });
                      }}
                    >
                      {number}명
                    </div>
                  </SwiperSlide>
                ))}{" "}
              </Swiper>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  marginRight: "1rem",
                  width: "5rem",
                  color: this.state.time
                    ? "#AC8B68"
                    : timeEmpty
                    ? "red"
                    : "black",
                }}
              >
                시간 선택
              </div>
              <Swiper slidesPerView={screenWidth < 1000 ? 4 : 6}>
                {timeSlots.map((time, index) => (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        width: "80px",
                        height: "40px",
                        borderRadius: "5px",
                        marginRight: "1rem",
                        backgroundColor:
                          this.state.time === time ? "#AC8B68" : "#ccc",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        this.setState({ time: time });
                      }}
                    >
                      오후 {time}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "5rem",
                  color: this.state.table
                    ? "#AC8B68"
                    : tableEmpty
                    ? "red"
                    : "black",
                }}
              >
                옵션 선택
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "5px",
                    backgroundColor:
                      this.state.table === "테이블" ? "#AC8B68" : "transparent",
                    width: "25%",
                  }}
                  onClick={() => {
                    this.setState({ table: "테이블" });
                  }}
                >
                  <img
                    src={tableIcon}
                    alt="tableIcon"
                    style={{ width: "35px", height: "35px" }}
                  />
                  <span>테이블</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "5px",
                    backgroundColor:
                      this.state.table === "바" ? "#AC8B68" : "transparent",
                    width: "25%",
                  }}
                  onClick={() => {
                    this.setState({ table: "바" });
                  }}
                >
                  <img
                    src={barIcon}
                    alt="barIcon"
                    style={{ width: "35px", height: "35px" }}
                  />
                  <span>바</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "5px",
                    backgroundColor:
                      this.state.table === "창가바" ? "#AC8B68" : "transparent",
                    width: "25%",
                  }}
                  onClick={() => {
                    this.setState({ table: "창가바" });
                  }}
                >
                  <img
                    src={windowIcon}
                    alt="windowIcon"
                    style={{ width: "35px", height: "35px" }}
                  />
                  <span>창가바</span>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  width: "5rem",
                  color:
                    this.state.requestInput || request.length > 0
                      ? "#AC8B68"
                      : "black",
                }}
              >
                요청사항
              </div>
              <input
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  height: "50px",
                  paddingLeft: "10px",
                  border: "1px solid #ccc", // Default border color
                  outline: "none", // Remove default outline
                }}
                maxLength={255}
                value={request}
                onChange={(event) => {
                  this.setState({ request: event.target.value });
                }}
                onFocus={(event) => {
                  event.target.style.borderColor = "#AC8B68"; // Change border color when focused
                  this.setState({ requestInput: true });
                }}
                onBlur={(event) => {
                  event.target.style.borderColor = "#ccc"; // Restore default border color when focus is lost
                  this.setState({ requestInput: false });
                }}
              ></input>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "5rem",
              }}
            >
              <button
                style={{
                  borderRadius: "15px",
                  border: "1px solid",
                  width: "130px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Back
              </button>
              <button
                style={{
                  borderRadius: "15px",
                  border: "1px solid",
                  width: "130px",
                  cursor: "pointer",
                }}
                onClick={async () => {
                  if (!people || !time || !table) {
                    toast.error("인원수, 시간, 테이블 종류를 입력해주세요");
                    this.setState({
                      tableEmpty: true,
                      peopleEmpty: true,
                      timeEmpty: true,
                    });
                  } else {
                    await this.props.bookTables(
                      this.state.userId,
                      perf.band_id,
                      this.state.userName,
                      this.state.phone,
                      request,
                      time,
                      people,
                      table
                    );
                    if (this.props.bookingStatus.bookingStatus) {
                      localStorage.setItem(
                        "toastMessage",
                        "예약이 성공했습니다"
                      );

                      // Reload the page
                      window.location.reload();
                    }
                  }
                }}
              >
                Reserve Table
              </button>
            </div>
          </div>
          {Array.isArray(this.props.userSeats) &&
            this.props.userSeats.length > 0 && (
              <div
                style={{
                  width: screenWidth < 600 ? "100%" : "50%",
                  display: "flex",
                  flexDirection: "column",
                  height: "435px",
                  justifyContent: "space-evenly",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#AC8B68",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  예약 정보
                </div>
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", color: "#AC8B68" }}>
                      날짜
                    </div>
                    <div>{format(perf.perf_date, "yyyy-MM-dd")}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", color: "#AC8B68" }}>
                      시간
                    </div>
                    <div>{rsrv.time}pm</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", color: "#AC8B68" }}>
                      인원
                    </div>
                    <div>{rsrv.people} 명</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                      alignItems: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.5rem",
                        color: "#AC8B68",
                        width: "max-content",
                      }}
                    >
                      테이블 유형
                    </div>
                    <div>{rsrv.table_type}</div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "3rem",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <button
                    style={{
                      borderRadius: "15px",
                      border: "1px solid",
                      width: "130px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    Back
                  </button>
                  <button
                    style={{
                      borderRadius: "15px",
                      border: "1px solid",
                      width: "130px",
                      cursor: "pointer",
                    }}
                    onClick={async () => {
                      await this.props.cancelBooking(
                        rsrv.user_id,
                        rsrv.band_id
                      );
                      if (this.props.bookingCancelStatus.bookingStatus) {
                        // Store the toast message in localStorage
                        localStorage.setItem(
                          "toastMessage",
                          "예약이 성공적으로 취소되었습니다"
                        );

                        // Reload the page
                        window.location.reload();
                      }
                    }}
                  >
                    예약 취소
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }

  _intro() {
    const { screenWidth } = this.state;
    const swiperCount = 4;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: screenWidth < 600 ? "column" : "row",
          marginTop: "2rem",
        }}
      >
        <Swiper
          slidesPerView={1}
          style={{ width: screenWidth < 600 ? "100%" : "50%" }}
        >
          {[...Array(swiperCount).keys()].map((index) => (
            <SwiperSlide key={index}>
              <div
                className="image-div"
                style={{
                  width: "95%",
                  height: "435px",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                  cursor: "pointer",
                  position: "relative",
                }}
                onClick={() => {
                  /* Handle click event if needed */
                }}
              >
                <img
                  src={`/asset/frontend/src/photo/intro-image${index + 1}.jpg`}
                  alt={index}
                  style={{ width: "100%", height: "435px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  {index + 1}/{swiperCount}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          style={{
            width: screenWidth < 600 ? "100%" : "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h2
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#AC8B68" }}
          >
            무드서울 LIVE
          </h2>
          <span style={{ fontSize: "1.5rem", lineHeight: "3rem" }}>
            무드서울 2F 서울의 사계절을 담은 파노라마뷰를 담은 복합 엔터테인먼트
            다이닝 공간으로, 무드서울의 황홀한 미식을 다양한 주류를 함께 즐기실
            수 있 습니다.일주일간 서울의 야경을 배경으로 펼쳐지는 라이브 공연과
            함께 환상 적이고 로맨틱한 순간을 함께 할수 있습니다.
          </span>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.props.bookingCancelStatus.bookingStatus);
    return (
      <div style={{ width: "100%" }}>
        {this._intro()}
        {this._schedule()}
        {this._reservation()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  artists: state.artists.artists,
  tableLoading: state.tables.loading,
  bookingStatus: state.booking,
  userSeats: state.userSeats.userSeats,
  bookingCancelStatus: state.bookingCancel,
});

export default connect(mapStateToProps, {
  fetchArtists,
  bookTables,
  getUserSeats,
  cancelBooking,
})(Home);
