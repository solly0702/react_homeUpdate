import React, { Component } from "react";

import myPic from "../../statics/img/my_img.png";

class AboutMe extends Component {
  render() {
    return (
        <article class="about_me" id="about_me">
          <div class="container">
            <div class="row">
              <div class="col m10 s10 offset-m1 offset-s1">
                <h4>ABOUT ME</h4>
                <p>My name is Sol Lee, and I am a full stack and software developer. I build dynamic and responsive websites from scratch. I love coding in Javascript, Python, Java and others, as well as learning new technologies. I am someone who loves problem solving and discussing different approaches for problems with others. I love creating useful, beautiful and fun projects with cool people.</p>
              </div>
            </div>
            <div class="row">
              <div class="col m6 s10 offset-m3 offset-s1">
                <img src={myPic} alt="myPic" />
              </div>
            </div>
          </div>
        </article>
    )
  }
}

export default AboutMe;
