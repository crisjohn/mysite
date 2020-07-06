import React from "react";
const _ = "{ }";

function DarkDivider(props) {
  return (
    <div className="divider-custom">
      <div className="divider-custom-line"></div>
      <div className="divider-custom-icon">
        <h1>{props.title ? props.title : _}</h1>
      </div>
      <div className="divider-custom-line"></div>
    </div>
  );
}

function LightDivider(props) {
  return (
    <div className="divider-custom divider-light">
      <div className="divider-custom-line"></div>
      <div className="divider-custom-icon">
        <h1>{props.title ? props.title : _}</h1>
      </div>
      <div className="divider-custom-line"></div>
    </div>
  );
}

function Divider(props) {
  return props.dark ? (
    <DarkDivider title={props.title} />
  ) : (
    <LightDivider title={props.title} />
  );
}

export default Divider;
