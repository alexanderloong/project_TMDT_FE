// Import modules
import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { mngContext } from "../../context/mngContext";

// Main func
function Itemservice(props) {
  // Context
  const { deleteService, updateService } = useContext(mngContext);

  // Router
  const history = useHistory();

  // State
  const [service, setService] = useState({
    id: props.id,

    nameService: props.name,

    priceService: props.price,

    typeService: props.type,
  });

  // Handles
  const handleDelete = async () => {
    try {
      await deleteService(props.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (event) =>
    setService({
      ...service,
      [event.target.name]: event.target.value,
    });

  const handleUpdate = async () => {
    try {
      const res = await updateService(service);

      if (res.success) history.go(0);
    } catch (error) {
      console.log(error);
    }
  };

  // Render FE
  return (
    <Fragment>
      <tbody>
        <tr style={{ height: "60px" }}>
          <th scope="row">{props.stt}</th>
          <td>{props.name}</td>
          <td>{props.type}</td>
          <td>{props.price}vnđ</td>
          <td>
            <button
              type="button"
              className="btn btn-info mx-2"
              data-bs-toggle="modal"
              data-bs-target="#update"
            >
              Sửa
            </button>
            <div
              className="modal fade"
              id="update"
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
                  <div className="modal-body text-start">
                    <div>
                      <label>Tên Dịch Vụ</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nameService"
                        onChange={handleInput}
                        defaultValue={props.name}
                      />
                    </div>

                    <div>
                      <label>Giá Tiền</label>
                      <input
                        type="text"
                        className="form-control"
                        name="priceService"
                        onChange={handleInput}
                        defaultValue={props.price}
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
                        id="flexRadioDefault3"
                        defaultChecked={
                          props.type === "Nails Service" ? true : ""
                        }
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
                        id="flexRadioDefault4"
                        defaultChecked={
                          props.type === "Nails Design" ? true : ""
                        }
                      />
                      <b className="form-check-label">Nails Design</b>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleUpdate}
                    >
                      Xác Nhận
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleDelete}
            >
              Xoá
            </button>
          </td>
        </tr>
      </tbody>
    </Fragment>
  );
}

export default Itemservice;
