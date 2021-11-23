// Import modules
import React, { Fragment, useContext, useEffect } from "react";

import Itembook from "./itembook";
import Topseller from "../topseller";
import nail1 from "../../Picture/nail_1.png";

import { bookContext } from "../../context/bookContext";
import { authContext } from "../../context/authContext";
import { useHistory } from "react-router-dom";
// Main func
function Mngbooking() {
  // Context
  const { listBooking, updatePaymentBooking } = useContext(bookContext);
  const {
    authState: { user },
  } = useContext(authContext);

  // Router
  const history = useHistory();

  // Query search

  const loadPrams = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.message === undefined) return;
    if (params.message !== null) {
      try {
        if (params.message === "Success") {
          const response = await updatePaymentBooking(params.orderId);
          console.log(response.data);
        } else if (params.message !== "Success") console.log("Payment fail!");
      } catch (error) {
        console.log(error);
      }

      await history.push("/");
    }
  };

  useEffect(async () => {
    await loadPrams();
  }, []);

  console.log(listBooking);
  // Render FE
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className="row align-items-end" style={{ width: "350px" }}>
          <img src={nail1} alt="nail" style={{ width: "350px" }} />
        </div>
        <div>
          <h1 className="text-center">Quản Lý Lịch Đặt</h1>
          {Object.keys(listBooking).map((item, index) => {
            return (
              <Itembook
                key={index}
                booking={listBooking[index]}
                date={listBooking[index].date}
                name={user.name}
                people={listBooking[index].people}
                price={listBooking[index].totalPrice}
                payment={listBooking[index].typePayment}
                time={listBooking[index].time}
                sttPayment={listBooking[index].statusPayment}
                id={listBooking[index]._id}
                service={listBooking[index].service}
                sttBooking={listBooking[index].statusBooking}
              />
            );
          })}
        </div>

        <Topseller />
      </div>
    </Fragment>
  );
}

export default Mngbooking;
