// Import modules
import React, { Fragment, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { authContext } from "../context/authContext";
import { bookContext } from "../context/bookContext";

// Main func
function Mngnavbar() {
  // Context
  const {
    logoutUser,
    authState: { user },
  } = useContext(authContext);

  const { getAllBooking } = useContext(bookContext);

  // Router
  const history = useHistory();

  // Handle
  const handleConfirmService = async () => {
    await getAllBooking();
    await history.push("/mngbooked");
  };
  // Render FE
  return (
    <Fragment>
      <div className="mng-navbar col">
        <div>
          <Link to="/">
            <button type="button" className="btn-sm button_nav">
              {user.username} <i className="bi bi-person-fill" />
            </button>
          </Link>
        </div>

        <div>
          <Link to="/mngwarehouse">
            <button type="button" className="btn-sm button_nav">
              Quản lý kho <i className="bi bi-house-door-fill" />
            </button>
          </Link>
        </div>

        <div>
          <div>
            <button
              type="button"
              className="btn-sm button_nav"
              onClick={handleConfirmService}
            >
              Xác nhận lịch <i className="bi bi-calendar-fill" />
            </button>
          </div>
        </div>

        <div>
          <Link to="/mngposts">
            <button type="button" className="btn-sm button_nav">
              Thêm bài viết <i className="bi bi-newspaper" />
            </button>
          </Link>
        </div>

        <div>
          <Link to="/mngservices">
            <button type="button" className="btn-sm button_nav">
              Dịch Vụ <i className="bi bi-archive-fill" />
            </button>
          </Link>
        </div>

        <div>
          <Link to="/">
            <button type="button" className="btn-sm button_nav">
              Báo cáo <i className="bi bi-file-earmark-text-fill" />
            </button>
          </Link>
        </div>

        <div>
          <button
            type="button"
            onClick={logoutUser}
            className="btn-sm button_nav"
          >
            Đăng xuất
            <i className="bi bi-person-plus-fill" />
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Mngnavbar;
