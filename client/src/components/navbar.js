import React, { Component } from "react";
import { Link } from "react-router";

class Navbar extends Component {
  render() {
    return (
      <div class="navbar-fixed">
        <nav id="nav-bar" role="navigation">
          <div class="nav-wrapper container">
            <Link to="/" class="brand-logo">Sol Lee</Link>
            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down nav-bar">
              <li><a href="#top">Home</a></li>
              <li><a href="#about_me">ABOUT ME</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="./statics/resume.pdf">RESUME</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
            <ul class="side-nav" id="nav-mobile">
              <p><a href="#top" class="side-nav-logo"></a></p>
              <li><a href="#top">Home</a></li>
              <li><a href="#about_me">ABOUT ME</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="./statics/resume.pdf">RESUME</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
