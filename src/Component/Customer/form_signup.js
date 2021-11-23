// Import Module
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { authContext } from "../context/authContext";

// Main func
function Formsignup() {
  // Context
  const { registerUser } = useContext(authContext);

  // Local State
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    name: "",
    phonenumber: "",
    address: "",
  });

  const [validate, setValidate] = useState(false);

  // Router
  const history = useHistory();

  // Handle

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(registerForm);

    try {
      const registerData = await registerUser(registerForm);

      console.log(registerData);

      if (registerData.success) {
        setValidate(false);
        history.push("../signin");
      } else setValidate(true);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value.trim(),
    });

  // Render FE
  return (
    <div
      className="container d-flex flex-column justify-content-center"
      style={{ marginTop: "25px", width: "30%" }}
    >
      <form
        onSubmit={onSubmit}
        className="form-signup shadow p-3 mb-5 bg-body rounded"
      >
        <h1 className="text-center text-header">Đăng Ký Tài Khoản</h1>
        <div>
          <label className="form-label">
            Tên đăng nhập <i className="bi bi-asterisk align-top"></i>
          </label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              onChange={onChangeRegisterForm}
              name="username"
              required
            />
          </div>

          {validate === true ? (
            <div>
              <label>Tên đăng nhập đã tồn tại!</label>
            </div>
          ) : (
            ""
          )}
        </div>

        <div>
          <label className="form-label">
            Mật khẩu <i className="bi bi-asterisk align-top"></i>
          </label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              onChange={onChangeRegisterForm}
              type="password"
              name="password"
              required
            />
          </div>
        </div>

        <div>
          <label className="form-label">
            Họ tên <i className="bi bi-asterisk align-top "></i>
          </label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              onChange={onChangeRegisterForm}
              name="name"
              required
            />
          </div>
        </div>

        <div>
          <label className="form-label">
            Địa Chỉ <i className="bi bi-asterisk align-top"></i>
          </label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              onChange={onChangeRegisterForm}
              name="address"
              required
            />
          </div>
        </div>

        <div>
          <label className="form-label ">
            Số điện thoại <i className="bi bi-asterisk align-top"></i>
          </label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              onChange={onChangeRegisterForm}
              name="phonenumber"
              required
            />
          </div>
        </div>

        <div>
          <button type="submit" className="buttonio">
            <b>Đăng ký</b>
          </button>
        </div>

        <div
          className="d-flex flex-column"
          style={{ fontSize: "15px", color: "#940505" }}
        >
          <p>
            Bạn có tài khoản? Đăng nhập <Link to="/signin">tại đây!</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Formsignup;
