import React from "react";
import Divider from "./Divider";

function Experience() {
  return (
    <div className="container-fluid" style={{ height: "600px" }}>
      <div className="mt-5 text-uppercase">
        <Divider title="Experience" dark />
      </div>
      <div className="container mt-5">
        {/* TIME LINE */}
        <ul className="timeline">
          <li>
            <div class="timeline-image">
              <br />
              <h4>2016 - present</h4>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5>Software Developer | Team Lead</h5>
                <h6 class="subheading">at Leekie Enterprises Incorporated</h6>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  Experience developing using Nodejs with MongoDB. Consistently
                  deliver a scalable application with modular code. And Ensuring
                  the team is consistently delivering working software that
                  satisfies the business/client requirements within the defined
                  timeline.
                </p>
              </div>
            </div>
          </li>
          {/* <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/4.jpg"
                alt=""
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>July 2014</h4>
                <h4 className="subheading">Phase Two Expansion</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li> */}
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Building up
                <br />
                My
                <br />
                Career
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
