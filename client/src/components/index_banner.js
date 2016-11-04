import React, { Component } from "react";

import Navbar from "./navbar";

import downArrow from "../../statics/img/arrow_down.png";

class IndexBanner extends Component {
  render() {
    return (
        <div id="index-banner" class="parallax-container">
          <Navbar />
            <article class="index">
              <div class="container">
                <h1>I'm a developer</h1>
                <p>who really loves coding</p>
                <p><i>read more</i></p>
                <a href="#about_me"><img src={downArrow} alt="down_arrow" /></a>
              </div>
            </article>
          <div class="parallax">
            <img src="../../statics/img/bg_paralax.png" alt="bgImg" />
          </div>
        </div>
    )
  }
}

export default IndexBanner;
