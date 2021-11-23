// Import modules
import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { mngContext } from "../../context/mngContext";
import Itemservice from "./mngitemservice";

// Main func
function Mngservices() {
  // Context
  const { insertService, listService } = useContext(mngContext);

  // Local state
  const [service, setService] = useState({
    nameService: "",

    priceService: 0,

    typeService: "Nails Service",
  });

  // Router
  const history = useHistory();

  // Handle
  const handleInput = (event) =>
    setService({
      ...service,
      [event.target.name]: event.target.value,
    });

  const handleAdd = async () => {
    try {
      await insertService(service);

      history.go(0);
    } catch (error) {
      console.log(error);
    }
  };

  // Render FE
  return (
    <Fragment>
      <div>
        <div className="text-start m-2">
          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#addposts"
          >
            Thêm Dịch Vụ
          </button>

          <div
            className="modal fade"
            id="addposts"
            tabIndex="-1"
            aria-labelledby="addpostsLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addpostsLabel">
                    Dịch Vụ
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <div>
                    <label>Tên Dịch Vụ</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nameService"
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label>Giá Tiền</label>
                    <input
                      type="text"
                      className="form-control"
                      name="priceService"
                      onChange={handleInput}
                    />
                  </div>

                  <label>Kiểu Dịch Vụ</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="typeService"
                      onChange={handleInput}
                      value="Nails Service"
                      id="flexRadioDefault1"
                      defaultChecked
                    />
                    <b className="form-check-label">Nails Service</b>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="typeService"
                      onChange={handleInput}
                      value="Nails Design"
                      id="flexRadioDefault2"
                    />
                    <b className="form-check-label">Nails Design</b>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAdd}
                  >
                    Xác Nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Dịch Vụ</th>
              <th scope="col">Loại Dịch Vụ</th>
              <th scope="col">Giá Tiền</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          {Object.keys(listService).map((item, index) => {
            return (
              <Itemservice
                key={index}
                stt={index + 1}
                name={listService[index].nameService}
                price={listService[index].priceService}
                type={listService[index].typeService}
                id={listService[index]._id}
              />
            );
          })}
        </table>
      </div>
    </Fragment>
  );
}

export default Mngservices;
