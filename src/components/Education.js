import React from "react";
import Divider from "./Divider";

function Education() {
  return (
    <div className="container-fluid">
      <div className="mt-5 text-uppercase">
        <Divider title="Education" dark />
      </div>
      <div className="row h-50 mt-5">
        <div className="col-md-3 mx-auto">
          <div className="content text-center text-grey">
            <h3 className="text-uppercase mt-5 ml-5 mr-5">Elementary</h3>
            <hr className="w-75" />
            <h5 className="lead">
              Hinigaran Elementary School-A, Hinigaran, Negros Occidental
            </h5>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="content text-center text-grey">
            <h3 className="text-uppercase mt-5 ml-5 mr-5">High School</h3>
            <hr className="w-75" />
            <h5 className="lead">
              Hinigaran Institute Inc., Hinigaran, Negros Occidental
            </h5>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="content text-center text-grey">
            <h3 className="text-uppercase mt-5 ml-5 mr-5">College</h3>
            <hr className="w-75" />
            <h5 className="lead">
              University of St. La Salle, Bacolod City Negros Occidental
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
