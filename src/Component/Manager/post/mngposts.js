import React, { Fragment } from "react";
import Itempost from "./itempost";

function Mngposts() {
  return (
    <Fragment>
      <div>
        <h5>Bài Viết Đã Đăng</h5>

        <div className="text-start m-2">
          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#addposts"
          >
            Thêm Bài Viết
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
                    Bài viết
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <div>
                    <label>Tiêu Đề</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div>
                    <label>Nội Dung</label>
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Đăng bài
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Itempost />
        <Itempost />
        <Itempost />
      </div>
    </Fragment>
  );
}

export default Mngposts;
