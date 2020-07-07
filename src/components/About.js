import React from "react";
import Divider from "./Divider";
import Photo from "./../assets/images/20190906_084546-01.jpeg";

const spanIcon = {
  display: "inline-block",
  width: "200px",
  height: "200px",
  margin: "6px",
  marginTop: "6%",
  backgroundColor: "#555",
};

function About() {
  return (
    <div className="container-fluid bg-success" style={{ height: "600px" }}>
      <div className="align-items-center text-center">
        {/* <span className="rounded-circle" style={spanIcon}></span> */}
        <img
          src={Photo}
          alt="my_photo"
          className="rounded-circle"
          style={spanIcon}
        />
      </div>
      <div className="text-light text-uppercase d-flex justify-content-center mt-5 mb-3">
        <h1 className="mb-0">
          Christian John <span className="text-warning">Elmedo</span>
        </h1>
      </div>
      <Divider />
      <div className="d-flex justify-content-center mt-3">
        <a className="btn btn-outline-light btn-social mx-1" href="#!">
          <i className="fab fa-fw fa-facebook-f"></i>
        </a>
        <a className="btn btn-outline-light btn-social mx-1" href="#!">
          <i className="fab fa-fw fa-twitter"></i>
        </a>
        <a className="btn btn-outline-light btn-social mx-1" href="#!">
          <i className="fab fa-fw fa-linkedin-in"></i>
        </a>
        <a className="btn btn-outline-light btn-social mx-1" href="#!">
          <i className="fab fa-fw fa-skype"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
