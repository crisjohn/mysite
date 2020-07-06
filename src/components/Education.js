import React from "react";
import Divider from "./Divider";

const cardStyle = {
  height: "100%",
  width: "100%",
};

function Education() {
  return (
    <div className="section">
      <div className="mt-5 text-uppercase">
        <Divider title="Education" dark />
      </div>
      <div className="row h-50 mt-5">
        <div className="col-md-3 mx-auto">
          <div className="content text-center text-grey">
            <h4 className="text-uppercase mt-5 ml-5 mr-5">Elementary</h4>
            <hr className="w-75" />
            <p className="lead">
              Hinigaran Elementary School-A, Hinigaran, Negros Occidental
            </p>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="content text-center text-grey">
            <h4 className="text-uppercase mt-5 ml-5 mr-5">High School</h4>
            <hr className="w-75" />
            <p className="lead">
              Hinigaran Institute Inc., Hinigaran, Negros Occidental
            </p>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="content text-center text-grey">
            <h4 className="text-uppercase mt-5 ml-5 mr-5">College</h4>
            <hr className="w-75" />
            <p className="lead">
              University of St. La Salle, Bacolod City Negros Occidental
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
