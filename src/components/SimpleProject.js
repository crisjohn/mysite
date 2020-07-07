import React from "react";
import Divider from "./Divider";

function SimpleProject() {
  return (
    <div className="container-fluid mb-5">
      <div className="mt-5 text-uppercase">
        <Divider title="Simple Projects" dark />
      </div>
      <div className="row mt-5">
        <div className="col-md-2 mx-auto text-uppercase shadow-sm p-5 m-5">
          <div className="rounded">
            <div className="d-flex justify-content-center mt-3 mb-3">
              <h5>Chat App</h5>
            </div>
            <div className="d-flex justify-content-center">
              <i
                className="fab fa-github fa-3x text-warning"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-auto text-uppercase shadow-sm p-5 m-5">
          <div className="rounded">
            <div className="d-flex justify-content-center mt-3 mb-3">
              <h5>Food Finder</h5>
            </div>
            <div className="d-flex justify-content-center">
              <i
                className="fab fa-github fa-3x text-warning"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-auto text-uppercase shadow-sm p-5 m-5">
          <div className="rounded">
            <div className="d-flex justify-content-center mt-3 mb-3">
              <h5>Notes</h5>
            </div>
            <div className="d-flex justify-content-center">
              <i
                className="fab fa-github fa-3x text-warning"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-auto text-uppercase shadow-sm p-5 m-5">
          <div className="rounded">
            <div className="d-flex justify-content-center mt-3 mb-3">
              <h5>Manga Browser</h5>
            </div>
            <div className="d-flex justify-content-center">
              <i
                className="fab fa-github fa-3x text-warning"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleProject;
