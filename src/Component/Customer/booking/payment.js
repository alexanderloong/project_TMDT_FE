// Import modules
import React, { Fragment, useContext, useState } from "react";

import nail300 from "../../Picture/nail300.png";
import nail1 from "../../Picture/nail_1.png";

import { bookContext } from "../../context/bookContext";
import { authContext } from "../../context/authContext";
import { useHistory } from "react-router-dom";

// Main func
function Payment() {
  // Context
  const { getUser } = useContext(authContext);
  const { getBook, setPayment, postBooking, postPayment, getAllBooking } =
    useContext(bookContext);

  // Router
  const history = useHistory();
  // Variables
  const momo = "https://sundaysea.com/wp-content/uploads/2019/07/logo-momo.png";
  const user = getUser();
  const book = getBook();

  // Local State
  const [pment, setPment] = useState("offline");

  // Handle
  const handleClick = () =>
    setPayment({ payment: pment, username: user.username });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await postBooking();

      const newBooking = response.newBooking;

      if (newBooking.typePayment === "online") {
        const resPayment = await postPayment(newBooking);

        if (resPayment.errorCode === 0)
          window.location.replace(resPayment.payUrl);
        else console.log(resPayment.message);
      } else {
        await getAllBooking(user.username);
        await history.push("/managementbooking");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hanldeChange = (e) => {
    setPment(e.target.value);
  };

  // Render FE
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className="row align-items-end" style={{ width: "350px" }}>
          <img src={nail1} alt="nail" style={{ width: "350px" }} />
        </div>

        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Thanh Toán</h1>

          <div id="container-border">
            <h4>Thông tin chung</h4>

            <label>Họ tên:</label>
            <span>{user.name}</span>

            <br />

            <label>Tổng tiền: </label>
            <span>{book.totalPrice}VNĐ</span>

            <br />
            <br />
            <h4>Hình thức thanh toán</h4>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pment"
                id="flexRadioDefault1"
                value="offline"
                onChange={hanldeChange}
                defaultChecked
              />
              <label className="form-check-label">
                Thanh Toán Tại Cửa Hàng
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pment"
                id="flexRadioDefault2"
                value="online"
                onChange={hanldeChange}
              />
              <label className="form-check-label">Thanh Toán Online</label>
            </div>
            <br />
            <div className="text-center">
              <img src={momo} alt="Momo Payment" style={{ width: "80px" }} />
            </div>
          </div>

          <div className="text-center" style={{ marginBottom: "20px" }}>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleClick}
            >
              Xác Nhận
            </button>
          </div>
        </form>

        <div className="align-self-center">
          <img src={nail300} alt="nail" style={{ width: "300px" }} />
        </div>
      </div>
    </Fragment>
  );
}

export default Payment;
