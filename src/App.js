import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/Custom.css";

import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import SimpleProject from "./components/SimpleProject";
import Achievement from "./components/Achievements";

function App() {
  return (
    <React.Fragment>
      <button
        className="btn btn-primary btn-sm"
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          marginTop: "5px",
          marginRight: "5px",
        }}
      >
        Download CV
      </button>
      <About />
      <Education />
      <Skills />
      <Experience />
      <SimpleProject />
      <Achievement />
    </React.Fragment>
  );
}

export default App;
