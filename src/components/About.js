import React from "react";
import Divider from "./Divider";

const spanIcon = {
  display: "inline-block",
  width: "150px",
  height: "150px",
  margin: "6px",
  marginTop: "6%",
  backgroundColor: "#555",
};

const socialStyle = {};

function About() {
  return (
    <div className="section bg-success">
      <div className="align-items-center text-center">
        <span className="rounded-circle" style={spanIcon}></span>
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
