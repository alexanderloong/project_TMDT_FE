import React, { Fragment, useState } from "react";
import Itemproduct from "./itemproduct";

function Mngwarehouse() {
  // State
  const [update, setUpdate] = useState(0);

  return (
    <Fragment>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên Sản Phẩm</th>
              <th scope="col">Giá Tiền</th>
              <th scope="col">Số Lượng</th>
            </tr>
          </thead>
          <tbody>
            <Itemproduct update={update} />
            <Itemproduct update={update} />
            <Itemproduct update={update} />
            <Itemproduct update={update} />
            <Itemproduct update={update} />
            <Itemproduct update={update} />
            <Itemproduct update={update} />
          </tbody>
        </table>
      </div>

      <div>
        <button
          type="button"
          onClick={() => setUpdate(!update)}
          className="btn-sm button_nav"
        >
          {update ? "Xác Nhận" : "Cập Nhật"}
        </button>
      </div>
    </Fragment>
  );
}

export default Mngwarehouse;
