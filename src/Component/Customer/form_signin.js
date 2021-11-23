import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { authContext } from "../context/authContext";

function Formsignin() {
  // Context
  const { loginUser } = useContext(authContext);

  // Local State
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [validate, setValidate] = useState(true);

  // Router
  const history = useHistory();

  // Func handle
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(loginForm);
    try {
      const loginData = await loginUser(loginForm);

      console.log(loginData);
      if (loginData.success) {
        setValidate(true);
        history.go(0);
      } else {
        setValidate(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeLoginForm = (event) =>
    setLoginForm({
      ...loginForm,
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
        <h1 className="text-center text-header">Đăng Nhập</h1>

        <div>
          <label className="form-label">
            Tên đăng nhập <i className="bi bi-asterisk align-top"></i>
          </label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="username"
              name="username"
              onChange={onChangeLoginForm}
              required
            />
          </div>
        </div>

        <div>
          <label className="form-label">
            Mật khẩu <i className="bi bi-asterisk align-top"></i>
          </label>
          <div className="input-group mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={onChangeLoginForm}
              required
            />
          </div>
        </div>

        {!validate ? (
          <div className="text-center">
            <label>Nhập sai Username hoặc Password</label>
          </div>
        ) : (
          ""
        )}

        <div>
          <button type="submit" className="buttonio">
            <b>Đăng Nhập</b>
          </button>
        </div>

        <div className="d-flex flex-column" style={{ color: "#940505" }}>
          <p className="text-center">
            Bạn chưa có tài khoản? Đăng ký tài khoản{" "}
            <Link to="/signup">tại đây!</Link>
          </p>
        </div>

        <div
          className="d-flex flex-column "
          style={{ fontSize: "13px", color: "#940505" }}
        >
          <p className="text-center">
            Quên mật khẩu? Bấm <a href="/#">vào đây</a> để đặt lại
          </p>
        </div>
      </form>
    </div>
  );
}

export default Formsignin;
