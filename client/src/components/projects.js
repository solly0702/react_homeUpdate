import React, { Component } from "react";
import { Link } from "react-router";

import reactHome from "../../statics/img/react_home.png";
import prevaLearn from "../../statics/img/preva_learn.png";
import dojoPool from "../../statics/img/dojopool.png";
import CardFieldGroup from "./common/cardFieldGroup";

function createCard(img, title, link, link_desc, func) {
  return (
    <div class="row" id="projects">
      <div class="col m8 s10 offset-m2 offset-s1">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={img} />
          </div>
          <div class="card-content">
            <span class="card-title activator">{title}<i class="material-icons right">more_vert</i></span>
            <p><Link to={link}>{link_desc}</Link></p>
          </div>
          <div class="card-reveal">
            <span class="card-title">{title}<i class="material-icons right">close</i></span>
            {func}
          </div>
        </div>
      </div>
    </div>
  )
}

function reactHome_contaxt() {
  return(
    <ul>
      <li>•	Describes my professional experience and skills, including ability to implement self-taught knowledge of React with Redux architecture</li>
      <li>•	Used JavaScript, Express, NodeJS, React, Twitter Bootstrap for React, HTML5, and CSS3</li>
    </ul>
  )
}

function prevaLearn_contaxt() {
  return(
    <ul>
      <li>•	Web application for individuals and organizations to advertise learning courses; all users are able to select their favorite courses and use course materials</li>
      <li>•	Created the application features that meet client’s needs</li>
      <li>•	Applied Ruby on Rails with other third party gems and database management with PostgreSQL</li>
    </ul>
  )
}

function dojoPool_contaxt() {
  return(
    <ul>
      <li>•	Web application where users register, create login, upload and accept schedules and requests for joining carpools</li>
      <li>•	Utilized JavaScript, MongoDB, NodeJS, AngularJS, Google API, Twitter Bootstrap, HTML5, CSS3 and GoogleMaps API</li>
    </ul>
  )
}

class Projects extends Component {
  render() {
    return (
      <article class="projects" id="projects">
        <div class="container">
          <h4>PROJECTS</h4>
          <CardFieldGroup
            img={dojoPool}
            title= "Simple Carpool Website"
            link="http://52.2.200.39/"
            link_desc="Click to go to the live DojoCarpool website on AWS"
            contaxt={dojoPool_contaxt}
          />

          <CardFieldGroup
            img={prevaLearn}
            title= "PrevaLearn from freelancer.com"
            link="http://fathomless-basin-86556.herokuapp.com/users/sign_in"
            link_desc="Click to go to the live PrevaLearn website on Heroku"
            contaxt={prevaLearn_contaxt}
          />

          <CardFieldGroup
            img={reactHome}
            title= "Simple React Homepage"
            link="https://github.com/solly0702/react_homepage"
            link_desc="Click to see the source code for Simple React Homepage"
            contaxt={reactHome_contaxt}
          />

        </div>
      </article>
    )
  }
}

export default Projects;
