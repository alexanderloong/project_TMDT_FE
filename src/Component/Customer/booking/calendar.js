// Import modules
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Topseller from "../topseller";
import nail300 from "../../Picture/nail300.png";

import { bookContext } from "../../context/bookContext";

// Main func
function Calendarbook() {
  // Context
  const { chooseDate } = useContext(bookContext);

  // Local State
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const [people, setPeople] = useState(1);

  // Router
  const history = useHistory();

  /// Handles
  const handleTime = (event) => setTime(event.target.value);
  const handlePeople = (event) => setPeople(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    chooseDate({ date, people, time });
    history.push("/booking/chooseservice");
  };

  // Variables
  const now = new Date();

  return (
    <div className="d-flex justify-content-between">
      <div className="row align-items-end">
        <img src={nail300} style={{ width: "350px" }} alt="nail" />
      </div>

      <div>
        <h1 className="text-center">Đặt Lịch</h1>
        <div>
          <form
            id="container-border"
            onSubmit={handleSubmit}
            className="d-flex"
          >
            <div>
              <label>Anh/chị đi ngày nào?</label>
              <Calendar
                onChange={setDate}
                value={date}
                minDate={now}
                maxDate={new Date(2021, 11, 31)}
                required
              />
            </div>
            <div id="calendar-setting">
              <label>Khung giờ anh chị có thể đến?</label>
              <select onChange={handleTime} className="form-select" required>
                <option value="">Chọn giờ...</option>
                <option
                  value="9h - 11h"
                  disabled={
                    date.getDate() === now.getDate() && now.getHours() >= 9
                      ? true
                      : ""
                  }
                >
                  9h - 11h
                </option>
                <option
                  value="11h - 13h"
                  disabled={
                    date.getDate() === now.getDate() && now.getHours() >= 11
                      ? true
                      : ""
                  }
                >
                  11h - 13h
                </option>
                <option
                  value="13h - 15h"
                  disabled={
                    date.getDate() === now.getDate() && now.getHours() >= 13
                      ? true
                      : ""
                  }
                >
                  13h - 15h
                </option>
                <option
                  value="15h - 17h"
                  disabled={
                    date.getDate() === now.getDate() && now.getHours() >= 15
                      ? true
                      : ""
                  }
                >
                  15h - 17h
                </option>
                <option
                  value="17h - 19h"
                  disabled={
                    date.getDate() === now.getDate() && now.getHours() >= 17
                      ? true
                      : ""
                  }
                >
                  17h - 19h
                </option>
                <option
                  value="19h - 21h"
                  disabled={
                    date.getDate() === now.getDate() && now.getHours() >= 19
                      ? true
                      : ""
                  }
                >
                  19h - 21h
                </option>
              </select>

              <label>Anh/chị đi cùng mấy người?</label>
              <select onChange={handlePeople} className="form-select">
                <option value="1">Đi một mình ạ</option>
                <option value="2">Đi hai mình</option>
                <option value="3">Bộ ba</option>
              </select>

              <label>Xác nhận</label>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Thời gian
                </span>
                <input
                  type="text"
                  className="form-control"
                  value={`${time} ngày ${date.getDate()} / ${
                    date.getMonth() + 1
                  } `}
                  disabled
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Số người
                </span>
                <input
                  type="text"
                  className="form-control"
                  value={`${people === "4" ? "Hơn 3" : people} người`}
                  disabled
                />
              </div>

              <div className="text-center" style={{ marginBottom: "20px" }}>
                <button
                  style={{ width: "100%" }}
                  type="submit"
                  className="btn btn-danger"
                >
                  {" "}
                  Đặt Lịch
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Topseller />
    </div>
  );
}

export default Calendarbook;
