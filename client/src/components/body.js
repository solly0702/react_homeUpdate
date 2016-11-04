import React, { Component } from "react";

import IndexBanner from "./index_banner";
import AboutMe from "./about_me";
import Skills from "./skills";
import Projects from "./projects";

class Body extends Component {
  render() {
    return (
      <main class="body">
        <IndexBanner />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    )
  }
}

export default Body;
