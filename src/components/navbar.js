import React, { Component } from "react";

import { Link } from "react-router";

class Navbar extends Component {
  render() {
    return (
      <div class="navbar-fixed">
        <nav class="transparent" role="navigation">
          <div class="nav-wrapper container">
            <Link to="/" class="brand-logo">Sol Lee</Link>
            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><Link to="#home">HOME</Link></li>
              <li><Link to="#about">ABOUT ME</Link></li>
              <li><Link to="#skills">SKILLS</Link></li>
              <li><Link to="#projects">PROJECTS</Link></li>
              <li><Link to="#resume">RESUME</Link></li>
              <li><Link to="#contact">CONTACT</Link></li>
            </ul>
            <ul class="side-nav" id="nav-mobile">
              <li><Link to="#home">HOME</Link></li>
              <li><Link to="#about">ABOUT ME</Link></li>
              <li><Link to="#skills">SKILLS</Link></li>
              <li><Link to="#projects">PROJECTS</Link></li>
              <li><Link to="#resume">RESUME</Link></li>
              <li><Link to="#contact">CONTACT</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
