// Import Modules
import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";

import { bookContext } from "../../context/bookContext";
import { authContext } from "../../context/authContext";

// Import Component
import Serviceinfor from "../inforservice";
import nail1 from "../../Picture/nail_1.png";
import nail6 from "../../Picture/nail_6png.png";

// Main func
function Bookinginformation(props) {
  // Context
  const { getBook, totalPrice } = useContext(bookContext);
  const { getUser } = useContext(authContext);

  // Variables
  let ttpri = 0;

  let book = getBook();
  let user = getUser();

  // Router
  const history = useHistory();

  // Handle
  const handleSubmit = (event) => {
    event.preventDefault();
    totalPrice(ttpri * book.people);

    history.push("/booking/payment");
  };

  // Render FE
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className="row align-items-end" style={{ width: "350px" }}>
          <img src={nail1} alt="nail" style={{ width: "350px" }} />
        </div>
        <form onSubmit={handleSubmit} style={{ width: "600px" }}>
          <h1 className="text-center">Thông Tin Lịch Đặt</h1>
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="text-center">Khách Hàng</h4>

              <div id="container-border">
                <div>
                  <div>
                    <h6>Họ Và Tên</h6>

                    <p className="text-center">{user.name}</p>
                  </div>

                  <div>
                    <h6>Số Điện Thoại</h6>

                    <p className="text-center">{user.phonenumber}</p>
                  </div>

                  <div>
                    <h6>Thời Gian</h6>

                    <p className="text-center">{`${
                      book.time
                    }, ngày ${book.date.getDate()}/${
                      book.date.getMonth() + 1
                    }/${book.date.getFullYear()} `}</p>
                  </div>

                  <div>
                    <h6>Số Người</h6>

                    <p className="text-center">{book.people}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-center">Dịch Vụ</h4>

              <div id="container-border">
                <div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ width: "250px" }}
                  >
                    <h6 style={{ marginTop: "0%" }}>Tên Dịch Vụ</h6>
                    <h6>Giá Tiền</h6>
                  </div>

                  {book.service.map((item, index) => {
                    ttpri += item.priceService;

                    return (
                      <Serviceinfor
                        key={index}
                        name={item.nameService}
                        price={item.priceService}
                        VNĐ
                      />
                    );
                  })}
                </div>

                <div className="d-flex justify-content-between">
                  <label>Tổng Tiền</label>
                  <b className="mt-2">{ttpri * book.people}VNĐ</b>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginBottom: "20px" }}>
            <div>
              <button type="submit" className="btn btn-danger">
                Xác Nhận
              </button>
            </div>
          </div>
        </form>
        <div className="align-self-center">
          <img src={nail6} alt="nail" style={{ width: "300px" }} />
        </div>
      </div>
    </Fragment>
  );
}

export default Bookinginformation;
