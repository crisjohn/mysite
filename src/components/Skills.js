import React from "react";
import Divider from "./Divider";

function Skills() {
  return (
    <div className="section">
      <div className="mt-5 text-uppercase">
        <Divider title="Skills" dark />
      </div>
      <div className="row mx-auto mt-5">
        <div className="col-md-2">
          <div className="d-flex justify-content-center bg-success shadow rounded">
            <i className="fa fa-language fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <ul>
            <li>English</li>
            <li>Tagalog</li>
            <li>Hiligaynon</li>
          </ul>
        </div>
        <div className="col-md-2">
          <div className="d-flex justify-content-center bg-danger shadow rounded">
            <i className="fa fa-laptop fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <ul>
            <li>Windows</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="col-md-2">
          <div className="d-flex justify-content-center bg-warning shadow rounded">
            <i className="fa fa-building fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <ul>
            <li>Monolithic</li>
            <li>Microservice</li>
          </ul>
        </div>
        <div className="col-md-2">
          <div className="d-flex justify-content-center bg-secondary shadow rounded">
            <i className="fa fa-fire fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <ul>
            <li>Express.js</li>
            <li>Koa.js</li>
            <li>Nestjs</li>
            <li>Angular</li>
            <li>React</li>
          </ul>
        </div>
        <div className="col-md-2">
          <div className="d-flex justify-content-center bg-info shadow rounded">
            <i className="fas fa-code fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <ul>
            <li>Javascript</li>
            <li>ECMAScript (ES 6-7)</li>
            <li>Node.js</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div className="col-md-2">
          <div className="d-flex justify-content-center bg-info shadow rounded">
            <i className="fas fa-book-open fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <ul>
            <li>Socket.io</li>
            <li>JQuery</li>
            <li>Bootstrap 3-4</li>
          </ul>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-md-2">
          <div className="d-flex justify-content-center bg-info shadow rounded">
            <i className="fas fa-align-right fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <ul>
            <li>JSON</li>
            <li>XML</li>
          </ul>
        </div>
        <div className="col-md-2">
          <div className="d-flex justify-content-center bg-info shadow rounded">
            <i className="fas fa-database fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Redis</li>
          </ul>
        </div>
        <div className="col-md-2">
          <div className="d-flex justify-content-center bg-info shadow rounded">
            <i className="fas fa-search fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <ul>
            <li>NoSQL</li>
            <li>SQL</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className="col-md-2">
          <div className="d-flex justify-content-center bg-info shadow rounded">
            <i className="fas fa-flask fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <ul>
            <li>Mocha</li>
            <li>Chai.js</li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-center bg-info shadow rounded">
            <i className="fas fa-info-circle fa-2x m-1"></i>
          </div>
          <hr className="w-75" />
          <div className="row">
            <div className="col">
              <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>Docker</li>
                <li>PM2</li>
                <li>Express Gateway</li>
                <li>Nginx</li>
                <li>REST API</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Bash Script</li>
                <li>GraphQL Apollo</li>
                <li>OOP</li>
                <li>Git</li>
                <li>SVN</li>
                <li>Cloud(Digital Ocean, Heroku)</li>
                <li>VM</li>
                <li>Redux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
