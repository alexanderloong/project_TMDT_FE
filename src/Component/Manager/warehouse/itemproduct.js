import React, { Fragment } from "react";

function Itemproduct(props) {
  return (
    <Fragment>
      <tr style={{ height: "60px" }}>
        <th scope="row">1</th>
        <td>Bộ móng giả đính đá cao cấp Handmade MSI435</td>
        <td>200.000vnđ</td>
        <td style={{ width: "80px" }}>
          {props.update ? (
            <input type="text" className="form-control" defaultValue={100} />
          ) : (
            100
          )}
        </td>
      </tr>
    </Fragment>
  );
}

export default Itemproduct;
