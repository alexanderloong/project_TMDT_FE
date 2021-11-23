import React from "react";

function Service(props) {
  // Function

  const handleCheck = (event) =>
    props.idchoose([event.target.checked, props.id]);

  return (
    <div className="d-flex justify-content-between">
      <div className="form-check">
        <label
          className="form-check-label form-check-input-checked-color: red"
          style={{ marginTop: "0%" }}
        >
          {" "}
          {props.name}
        </label>
        <input
          className="form-check-input"
          name="my-check"
          type="checkbox"
          onChange={handleCheck}
        />
      </div>
      <p>{props.price / 1000}k</p>
    </div>
  );
}

export default Service;
