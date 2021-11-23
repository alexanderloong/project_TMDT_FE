// Import modules
import React, { Fragment, useContext, useState, useEffect } from "react";
import { bookContext } from "../context/bookContext";
import { mngContext } from "../context/mngContext";

// Main func
function Mngbooked(props) {
  // Variables
  const dathanhtoan = "https://cdn.fast.vn/tmp/20201024113642-2.PNG";

  // Context
  const { confirmService } = useContext(mngContext);
  const { getAllBooking } = useContext(bookContext);

  // Local State
  const [detail, setDetail] = useState(false);

  // Router

  // Handle
  const handleClick = () => setDetail(!detail);

  const handleConfirm = async () => {
    try {
      const res = await confirmService(props.id);

      await getAllBooking();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  // Mapping
  let detail_service = (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên Dịch Vụ</th>
          <th scope="col">Loại Dịch Vụ</th>
          <th scope="col">Giá tiền</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props.service).map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{props.service[index].nameService}</td>
            <td>{props.service[index].typeService}</td>
            <td>{props.service[index].priceService}vnđ/Người</td>
          </tr>
        ))}
        <tr>
          <th scope="row"></th>
          <td></td>
          <td>TỔNG TIỀN: </td>
          <td>{props.price}VNĐ</td>
        </tr>
      </tbody>
    </table>
  );

  useEffect(() => console.log(props.service), []);
  // Render FE
  return (
    <Fragment>
      <div
        id="container-border"
        className="d-flex justify-content-between"
        style={{ height: "fit-content" }}
      >
        <div>
          <label style={{ marginTop: "0%" }}>{props.date.slice(0, 10)}</label>
          <p style={{ fontSize: "130%" }}>{props.name}</p>

          <div className="text-center">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleConfirm}
              disabled={props.sttBooking ? true : ""}
            >
              {props.sttBooking ? "Đã hoàn tất" : "Xác nhận"}
            </button>
          </div>
        </div>

        <div>
          <div className="d-flex">
            <b>Số người: &nbsp;</b>
            <p>{`${props.people} người`}</p>
          </div>

          <div className="d-flex">
            <b>Thời gian: &nbsp;</b>
            <p>{props.time}</p>
          </div>

          <div className="d-flex">
            <b>Hình thức thanh toán: &nbsp;</b>
            <p>{props.payment}</p>
          </div>

          <button type="button" className="btn btn-info" onClick={handleClick}>
            Chi Tiết Dịch Vụ{" "}
          </button>
        </div>

        <div className="" style={{ width: "200px" }}>
          {props.sttPayment ? (
            <img
              src={dathanhtoan}
              alt="Dathanhtoan"
              style={{ width: "200px" }}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      {detail ? (
        <div
          id="container-border"
          className="d-flex justify-content-center"
          style={{ width: "732.23px" }}
        >
          {detail_service}
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Mngbooked;
