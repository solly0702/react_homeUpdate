import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <article class="skills" id="skills">
        <div class="container">
          <h4>TECHNICAL SKILLSETS</h4>
          <div class="row">
            <div class="col m4">
              <section class="language">
                <p class="icons"><i class="material-icons large">language</i></p>
                <h5>LANGUAGE</h5>
                <p>JavaScript, Python, Ruby, Java, C, HTML, CSS, SASS</p>
              </section>
            </div>
            <div class="col m4">
              <section class="dev_tool">
                <p class="icons"><i class="material-icons large">play_for_work</i></p>
                <h5>DEV TOOLS</h5>
                <p>Atom, Unix based Terminal and console, Git/Github, Gitbucket, Wireframe, ERD, NPM, Bower, Restful-Architecture, and Object-Oriented-Programming</p>
              </section>
            </div>
            <div class="col m4">
              <section class="dataset">
                <p class="icons"><i class="material-icons large">input</i></p>
                <h5>DATABASE</h5>
                <p>MySQL, PostgreSQL, SQLite, and MongoDB</p>
              </section>
            </div>
          </div>
          <h4>FRAMEWORKS</h4>
          <div class="row">
            <div class="col m4 offset-m2">
              <section class="front_end">
                <p class="icons"><i class="material-icons large">mode_edit</i></p>
                <h5>FRONT-END DEV</h5>
                <p>HTML5, CSS3, Bootstrap, SASS, Materialize, jQuery, AJAX, Angular, React, Balsamiq, Photoshop, and Mobile First Responsive Web Design</p>
              </section>
            </div>
            <div class="col m4">
              <section class="back_end">
                <p class="icons"><i class="material-icons large">import_export</i></p>
                <h5>BACK-END DEV</h5>
                <p>MEAN Stack (NodeJS & Express), Ruby on Rails, Python with Django and Flask</p>
              </section>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default Skills
