import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { msgSend } from "../actions/msg_actions"
import { addFlashMessage } from "../actions/FlashMessages"

import MsgForm from "./forms/msg_form";
import FlashMessagesList from "./flash/FlashMessagesList";

import github from "../../statics/img/git_hub.png";
import linkedin from "../../statics/img/linked_in.png";
import email from "../../statics/img/email.png";

class Footer extends Component {
  render() {
    const { msgSend, addFlashMessage } = this.props;

    return (
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col l6 m10 offset-m1">
              <section class="form-head" id="contact">
                <h5><i>Would you like to discuss something?</i></h5>
                <p>You can email me at <span><a href="mailto:solly0702@gmail.com">solly0702@gmail.com</a></span> or submit the form below!</p>
              </section>
                <FlashMessagesList />
                <MsgForm msgSend={msgSend} addFlashMessage={addFlashMessage} />
            </div>
            <div class="col l6 m10 offset-m1">
              <section class="about-homepage">
                <h5><i>ABOUT THIS HOMEPAGE</i></h5>
                <p><span>Front-End:</span>ReactJS, jQuery, Materialize</p>
                <p><span>Back-End:</span>NodeJS, Amazon-AWS</p>
                <p><span>Source-Code:</span><a href="https://github.com/solly0702/react_homeUpdate" class="waves-effect wave-light btn transparent">Click Here! <i class="material-icons">code</i></a></p>
              </section>
              <section class="follow-me">
              <h5><i>FOLLOW ME</i></h5>
                <a href="https://github.com/solly0702"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/han-sol-lee-99284287" class="linkedin"><img src={linkedin} alt="linkedin" /></a>
                <a href="mailto:solly0702@gmail.com"><img src={email} alt="email" /></a>
              </section>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propType = {
  msgSend: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { msgSend, addFlashMessage })(Footer);
