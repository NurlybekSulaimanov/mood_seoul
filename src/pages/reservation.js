import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import * as icon from "@coreui/icons";
import "leaflet/dist/leaflet.css";
import CIcon from "@coreui/icons-react";
import { fetchArtists } from "../redux/actions/artistActions";
import { fetchTables } from "../redux/actions/bookedTablesAction";
import { format, addDays } from "date-fns";
class Reservation extends Component {
  constructor(props) {
    super(props);
    this.swiperRef = React.createRef();
  }
  state = {
    screenWidth: window.innerWidth,
    userId: null,
    scheduleDate: format(new Date(), "yyyy-MM-dd"),
    filteredTables: null,
    tables: ["R-1", "N-2", "C-6"],
  };

  componentDidUpdate() {
    const { userId } = this.state;
    const { artists, tables } = this.props;
    if (!userId) {
      this.setState({
        userId: this.props.userData.user_id,
      });
    }
    if (userId && tables.length === 0) {
      this.fetchTablesAsync();
    }
    if (artists.length > 0 && tables.length > 0) {
      const tablesByPerfDate = {};

      // Iterate over artists list

      artists.forEach((artist) => {
        // Iterate over tables list
        tables.forEach((table) => {
          // Check if the table's band_id matches the artist's band_id
          if (table.band_id === artist.band_id) {
            // Check if the perf_date already exists in the tablesByPerfDate object
            if (!tablesByPerfDate[format(artist.perf_date, "yyyy-MM-dd")]) {
              // If it doesn't exist, create an empty array for that perf_date
              tablesByPerfDate[format(artist.perf_date, "yyyy-MM-dd")] = [];
            }
            // Push the table object into the array corresponding to the perf_date
            tablesByPerfDate[format(artist.perf_date, "yyyy-MM-dd")].push(
              table
            );
          }
        });
      });

      // Now tablesByPerfDate object contains tables data organized by perf_date
      if (!this.state.filteredTables) {
        this.setState({ filteredTables: tablesByPerfDate });
      }
    }
  }

  async fetchTablesAsync() {
    await this.props.fetchTables(this.state.userId);
    await this.props.fetchArtists();
  }

  componentDidMount() {
    this.props.fetchArtists();
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
    const { scheduleDate, filteredTables } = this.state;

    // Check if filteredTables is null or undefined
    if (!filteredTables) {
      return <div>No data available</div>; // Return a message if filteredTables is null or undefined
    }

    // Get reservations for the selected scheduleDate
    const reservationsForDate =
      filteredTables[format(scheduleDate, "yyyy-MM-dd")];

    return (
      <div>
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
          <span>{format(scheduleDate, "yyyy-MM-dd")}</span>
          <CIcon
            icon={icon.cilChevronRight}
            size="sm"
            onClick={() => {
              this.setState({ scheduleDate: addDays(scheduleDate, 1) });
            }}
            style={{ cursor: "pointer", height: "20px", width: "20px" }}
          />
        </div>
        <div>
          <table style={{ borderSpacing: "0 1rem" }}>
            <thead
              style={{
                fontSize: "1.5rem",
                color: "#AC8B68",
                fontWeight: "bold",
              }}
            >
              <tr>
                <th>시간</th>
                <th>고객</th>
                <th>인원</th>
                <th>테이블</th>
                <th>상태</th>
                <th>요청사항</th>
                <th>연락처</th>
              </tr>
            </thead>
            <tbody>
              {reservationsForDate &&
                reservationsForDate.map((reservation) => (
                  <tr
                    key={reservation.reservation_id}
                    style={{ textAlign: "center" }}
                  >
                    <td>{reservation.time}</td>
                    <td>{reservation.user_nm}</td>
                    <td>{reservation.people}명</td>
                    <td>{reservation.table_type}</td>
                    <td
                      style={{ color: reservation.canceled ? "red" : "green" }}
                    >
                      {reservation.canceled ? "온라인취소" : "온라인예약"}
                    </td>
                    <td>{reservation.request}</td>
                    <td>{reservation.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  _tableMap() {
    const { tables } = this.state; // Assuming tables is an array in your state containing alt values

    // Select all images
    const images = document.querySelectorAll(".tableMap img");

    // Loop through each image
    images.forEach((image) => {
      // Check if the alt value of the image ends with 'r'
      let alt = image.getAttribute("alt");
      // console.log("Alt:", alt); // Debug statement
      const isAltEndsWithR = alt.endsWith("r");
      if (isAltEndsWithR) {
        alt = alt.slice(0, -1);
      }
      // console.log("isAltEndsWithR:", isAltEndsWithR); // Debug statement

      // Check if the alt value is in the tables array
      const isInTables = tables.includes(alt);
      // console.log(isInTables); // Debug statement

      // Determine the display value based on the conditions
      if (isInTables) {
        if (isAltEndsWithR) {
          // For images with alt ending with "r"
          image.style.display = "block"; // Set display to none if in tables, block otherwise
        } else {
          // For images with alt not ending with "r"
          image.style.display = "none"; // Set display to block if in tables, none otherwise
        }
      } else {
        if (isAltEndsWithR) {
          // For images with alt ending with "r"
          image.style.display = "none"; // Set display to none if in tables, block otherwise
        } else {
          // For images with alt not ending with "r"
          image.style.display = "block"; // Set display to block if in tables, none otherwise
          image.style.cursor = "pointer";
          image.onclick = () => {
            // Check if alt is not already in tables
            // Update state tables array by adding alt
            this.setState((prevState) => ({
              tables: [...prevState.tables, alt],
            }));
          };
        }
      }
    });

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ position: "inherit", display: "flex", justifyContent: "center" }}
        >
          <div
            className="tableMap"
            style={{
              width: "400px",
              height: "400px",
              border: "1px solid",
              position: "absolute",
            }}
          >
            <img
              src={`/asset/frontend/src/photo/R-1.jpg`}
              alt="R-1"
              style={{
                position: "absolute",
                left: "15px",
                top: "70px",
                bottom: "5px",
                width: "34px",
                height: "60px",
                cursor: "pointer",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/R-1r.jpg`}
              alt="R-1r"
              style={{
                position: "absolute",
                left: "18px",
                top: "69px",
                bottom: "5px",
                width: "29px",
                height: "60px",
                cursor: "pointer",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-1r.jpg`}
              alt="G-1r"
              style={{
                position: "absolute",
                left: "100px",
                top: "60px",
                bottom: "5px",
                width: "33px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-1.jpg`}
              alt="G-1"
              style={{
                position: "absolute",
                left: "100px",
                top: "58px",
                bottom: "5px",
                width: "33px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-2.jpg`}
              alt="G-2"
              style={{
                position: "absolute",
                left: "140px",
                top: "80px",
                bottom: "5px",
                width: "33px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-2r.jpg`}
              alt="G-2r"
              style={{
                position: "absolute",
                left: "141px",
                top: "78px",
                bottom: "5px",
                width: "32px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-3r.jpg`}
              alt="G-3r"
              style={{
                position: "absolute",
                left: "180px",
                top: "80px",
                bottom: "5px",
                width: "33px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-3.jpg`}
              alt="G-3"
              style={{
                position: "absolute",
                left: "180px",
                top: "80px",
                bottom: "5px",
                width: "33px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-4.jpg`}
              alt="G-4"
              style={{
                position: "absolute",
                left: "220px",
                top: "80px",
                bottom: "5px",
                width: "33px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-4r.jpg`}
              alt="G-4r"
              style={{
                position: "absolute",
                left: "222px",
                top: "80px",
                bottom: "5px",
                width: "30px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-5.jpg`}
              alt="G-5"
              style={{
                position: "absolute",
                left: "260px",
                top: "62px",
                bottom: "5px",
                width: "33px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-5r.jpg`}
              alt="G-5r"
              style={{
                position: "absolute",
                left: "260px",
                top: "62px",
                bottom: "5px",
                width: "33px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-1r.jpg`}
              alt="C-1r"
              style={{
                position: "absolute",
                right: "15px",
                top: "60px",
                bottom: "5px",
                width: "35px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-1.jpg`}
              alt="C-1"
              style={{
                position: "absolute",
                right: "17px",
                top: "61px",
                bottom: "5px",
                width: "31px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-2.jpg`}
              alt="C-2"
              style={{
                position: "absolute",
                right: "16px",
                top: "100px",
                bottom: "5px",
                width: "33px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-2r.jpg`}
              alt="C-2r"
              style={{
                position: "absolute",
                right: "14px",
                top: "101px",
                bottom: "5px",
                width: "34px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-3.jpg`}
              alt="C-3"
              style={{
                position: "absolute",
                right: "16px",
                top: "140px",
                bottom: "5px",
                width: "34px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-3r.jpg`}
              alt="C-3r"
              style={{
                position: "absolute",
                right: "14px",
                top: "139px",
                bottom: "5px",
                width: "38px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-4.jpg`}
              alt="C-4"
              style={{
                position: "absolute",
                right: "14px",
                top: "210px",
                bottom: "5px",
                width: "38px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-4r.jpg`}
              alt="C-4r"
              style={{
                position: "absolute",
                right: "18px",
                top: "210px",
                bottom: "5px",
                width: "30px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-5.jpg`}
              alt="C-5"
              style={{
                position: "absolute",
                right: "17px",
                top: "252px",
                bottom: "5px",
                width: "34px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-5r.jpg`}
              alt="C-5r"
              style={{
                position: "absolute",
                right: "15px",
                top: "250px",
                bottom: "5px",
                width: "38px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-6r.jpg`}
              alt="C-6r"
              style={{
                position: "absolute",
                right: "15px",
                top: "291px",
                bottom: "5px",
                width: "38px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/C-6.jpg`}
              alt="C-6"
              style={{
                position: "absolute",
                right: "16px",
                top: "292px",
                bottom: "5px",
                width: "38px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-9.jpg`}
              alt="G-9"
              style={{
                position: "absolute",
                left: "274px",
                top: "100px",
                bottom: "5px",
                width: "45px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-9r.jpg`}
              alt="G-9r"
              style={{
                position: "absolute",
                left: "274px",
                top: "100px",
                bottom: "5px",
                width: "45px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-8.jpg`}
              alt="G-8"
              style={{
                position: "absolute",
                left: "205px",
                top: "150px",
                bottom: "5px",
                width: "60px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-8r.jpg`}
              alt="G-8r"
              style={{
                position: "absolute",
                left: "203px",
                top: "148px",
                bottom: "5px",
                width: "63px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-7r.jpg`}
              alt="G-7r"
              style={{
                position: "absolute",
                left: "134px",
                top: "148px",
                bottom: "5px",
                width: "66px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-7.jpg`}
              alt="G-7"
              style={{
                position: "absolute",
                left: "136px",
                top: "150px",
                bottom: "5px",
                width: "62px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-6.jpg`}
              alt="G-6"
              style={{
                position: "absolute",
                left: "80px",
                top: "114px",
                bottom: "5px",
                width: "49px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/G-6r.jpg`}
              alt="G-6r"
              style={{
                position: "absolute",
                left: "80px",
                top: "114px",
                bottom: "5px",
                width: "49px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/A-2.jpg`}
              alt="A-2"
              style={{
                position: "absolute",
                left: "285px",
                top: "164px",
                bottom: "5px",
                width: "34px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/A-2r.jpg`}
              alt="A-2r"
              style={{
                position: "absolute",
                left: "285px",
                top: "164px",
                bottom: "5px",
                width: "34px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/A-3r.jpg`}
              alt="A-3r"
              style={{
                position: "absolute",
                left: "285px",
                top: "215px",
                bottom: "5px",
                width: "30px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/A-3.jpg`}
              alt="A-3"
              style={{
                position: "absolute",
                left: "285px",
                top: "215px",
                bottom: "5px",
                width: "30px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/B-3.jpg`}
              alt="B-3"
              style={{
                position: "absolute",
                left: "220px",
                top: "225px",
                bottom: "5px",
                width: "30px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/B-3r.jpg`}
              alt="B-3r"
              style={{
                position: "absolute",
                left: "220px",
                top: "225px",
                bottom: "5px",
                width: "30px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/B-2r.jpg`}
              alt="B-2r"
              style={{
                position: "absolute",
                left: "175px",
                top: "225px",
                bottom: "5px",
                width: "30px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/B-2.jpg`}
              alt="B-2"
              style={{
                position: "absolute",
                left: "175px",
                top: "225px",
                bottom: "5px",
                width: "30px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/B-1r.jpg`}
              alt="B-1r"
              style={{
                position: "absolute",
                left: "130px",
                top: "225px",
                bottom: "5px",
                width: "30px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/B-1.jpg`}
              alt="B-1"
              style={{
                position: "absolute",
                left: "130px",
                top: "225px",
                bottom: "5px",
                width: "30px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/N-1.jpg`}
              alt="N-1"
              style={{
                position: "absolute",
                left: "275px",
                top: "270px",
                bottom: "5px",
                width: "20px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/N-1r.jpg`}
              alt="N-1r"
              style={{
                position: "absolute",
                left: "275px",
                top: "270px",
                bottom: "5px",
                width: "20px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/N-2r.jpg`}
              alt="N-2r"
              style={{
                position: "absolute",
                left: "305px",
                top: "270px",
                bottom: "5px",
                width: "20px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/N-2.jpg`}
              alt="N-2"
              style={{
                position: "absolute",
                left: "305px",
                top: "270px",
                bottom: "5px",
                width: "20px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/N-4.jpg`}
              alt="N-4"
              style={{
                position: "absolute",
                left: "305px",
                top: "310px",
                bottom: "5px",
                width: "20px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/N-4r.jpg`}
              alt="N-4r"
              style={{
                position: "absolute",
                left: "305px",
                top: "310px",
                bottom: "5px",
                width: "20px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/N-3r.jpg`}
              alt="N-3r"
              style={{
                position: "absolute",
                left: "275px",
                top: "310px",
                bottom: "5px",
                width: "20px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/N-3.jpg`}
              alt="N-3"
              style={{
                position: "absolute",
                left: "275px",
                top: "310px",
                bottom: "5px",
                width: "20px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/T-4.jpg`}
              alt="T-4"
              style={{
                position: "absolute",
                left: "225px",
                top: "265px",
                bottom: "5px",
                width: "25px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/T-4r.jpg`}
              alt="T-4r"
              style={{
                position: "absolute",
                left: "225px",
                top: "265px",
                bottom: "5px",
                width: "25px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/T-3r.jpg`}
              alt="T-3r"
              style={{
                position: "absolute",
                left: "190px",
                top: "265px",
                bottom: "5px",
                width: "25px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/T-3.jpg`}
              alt="T-3"
              style={{
                position: "absolute",
                left: "190px",
                top: "265px",
                bottom: "5px",
                width: "25px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/T-2r.jpg`}
              alt="T-2r"
              style={{
                position: "absolute",
                left: "155px",
                top: "265px",
                bottom: "5px",
                width: "25px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/T-2.jpg`}
              alt="T-2"
              style={{
                position: "absolute",
                left: "155px",
                top: "265px",
                bottom: "5px",
                width: "25px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/T-1.jpg`}
              alt="T-1"
              style={{
                position: "absolute",
                left: "120px",
                top: "265px",
                bottom: "5px",
                width: "25px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/T-1r.jpg`}
              alt="T-1r"
              style={{
                position: "absolute",
                left: "120px",
                top: "265px",
                bottom: "5px",
                width: "25px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/R-2r.jpg`}
              alt="R-2r"
              style={{
                position: "absolute",
                left: "120px",
                top: "315px",
                bottom: "5px",
                width: "63px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/R-2.jpg`}
              alt="R-2"
              style={{
                position: "absolute",
                left: "120px",
                top: "315px",
                bottom: "5px",
                width: "63px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/R-3.jpg`}
              alt="R-3"
              style={{
                position: "absolute",
                left: "195px",
                top: "315px",
                bottom: "5px",
                width: "63px",
              }}
            />
            <img
              src={`/asset/frontend/src/photo/R-3r.jpg`}
              alt="R-3r"
              style={{
                position: "absolute",
                left: "195px",
                top: "315px",
                bottom: "5px",
                width: "63px",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ width: "auto" }}>
        {this._aboutComponent()}
        {this._tableMap()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  artists: state.artists.artists,
  tables: state.tables.bookedTables,
});

export default connect(mapStateToProps, { fetchArtists, fetchTables })(
  Reservation
);
