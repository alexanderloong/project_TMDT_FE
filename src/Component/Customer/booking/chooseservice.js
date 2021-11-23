// Import module
import React, { useContext, useState } from "react";

import Service from "./service";
import nail1 from "../../Picture/nail_1.png";
import Topseller from "../topseller";
import { useHistory } from "react-router-dom";
import { bookContext } from "../../context/bookContext";
import { mngContext } from "../../context/mngContext";

// Main func
function Chooseservice() {
  // Context
  const { listService } = useContext(mngContext);

  const { chooseService } = useContext(bookContext);

  // Router
  const history = useHistory();

  // Local State
  const [itemCheck, setItemCheck] = useState([]);

  // // Handle
  // function handleChoose(data) {
  //   const service = [...nail_service, ...nail_design];

  //   if (data[0]) itemcheck.push(service.find((x) => x.id === data[1]));
  //   else itemcheck.splice(itemcheck.indexOf(data[1]), 1);
  // }

  const handleChoose = (data) => {
    let array = Object.keys(listService);

    let index = array.find((x) => listService[`${x}`]._id === data[1]);

    let service = (({
      nameService,
      priceService,
      createDate,
      typeService,
      _id,
    }) => ({ nameService, priceService, createDate, typeService, _id }))(
      listService[index]
    );

    if (data[0]) {
      var joined = itemCheck.concat(service);
      setItemCheck(joined);
    } else {
      array = Object.keys(itemCheck);

      index = array.find((x) => itemCheck[`${x}`]._id === data[1]);

      let cpy = [...itemCheck];

      cpy.splice(index, 1);

      setItemCheck(cpy);
    }
    console.log(itemCheck);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    chooseService(itemCheck);

    history.push("/booking/information");
  };

  // Render FE
  return (
    <div className="d-flex justify-content-between">
      <div className="row align-items-end">
        <img src={nail1} alt="nail" />
      </div>

      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Chọn Dịch Vụ</h1>
        <div id="container-border" className="d-flex justify-content-between">
          <div style={{ width: "250px" }}>
            <h2 className="text-center">Nail Service</h2>
            <div className="d-flex justify-content-between">
              <h6 className="" style={{ marginTop: "0%" }}>
                TÊN DỊCH VỤ
              </h6>
              <h6>GIÁ TIỀN</h6>
            </div>
            {Object.keys(listService).map((item, index) => {
              return listService[index].typeService === "Nails Service" ? (
                <Service
                  key={index}
                  id={listService[index]._id}
                  name={listService[index].nameService}
                  price={listService[index].priceService}
                  idchoose={handleChoose}
                />
              ) : (
                ""
              );
            })}
          </div>

          <div style={{ width: "250px" }}>
            <h2 className="text-center">Nail Design</h2>

            <div className="d-flex justify-content-between">
              <h6 style={{ marginTop: "0%" }}>TÊN DỊCH VỤ</h6>
              <h6>GIÁ TIỀN</h6>
            </div>

            {Object.keys(listService).map((item, index) => {
              return listService[index].typeService === "Nails Design" ? (
                <Service
                  key={index}
                  id={listService[index]._id}
                  name={listService[index].nameService}
                  price={listService[index].priceService}
                  idchoose={handleChoose}
                />
              ) : (
                ""
              );
            })}
          </div>
        </div>

        <div className="text-center" style={{ marginBottom: "20px" }}>
          <button type="submit" className="btn btn-danger">
            {" "}
            Đặt Lịch
          </button>
        </div>
      </form>
      <div className="align-self-top">
        <Topseller />
      </div>
    </div>
  );
}

export default Chooseservice;
