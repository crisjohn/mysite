import React from "react";
import Divider from "./Divider";

function Achievements() {
  return (
    <div className="container-fluid mb-5 mt-5">
      <div className="mt-5 text-uppercase">
        <Divider title="Achievements" dark />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Employee of the Year 2017 at Leekie Enterprises Incorporated
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Employee of the Year 2018 at Leekie Enterprises Incorporated
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Leadership Training 2019 by SGS Academy
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Core Agile Workshop with Scrum, Extreme Programming and Kanban
            Training 2019 by Orange & Bronze Software Labs Inc.
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Employee of the Year 2019 at Leekie Enterprises Incorporated
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Achievements;
