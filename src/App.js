import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/Custom.css";

import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <React.Fragment>
      <About />
      <Education />
      <Skills />
      <Experience />
    </React.Fragment>
  );
}

export default App;
