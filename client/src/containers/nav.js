import React, { Component } from "react"
import { Link } from "react-router"
import { connect } from "react-redux"
import * as actions from "../actions"

class Nav extends Component {

  handleToggle() {
    this.props.toggleCtrl(this.props.toggle)
  }

  render() {
    let { toggle } = this.props
    let showNav = toggle ? {transform: "translateX(0px)"} : {transform: "translateX(-100%)"}

    return (
        <nav role="navigation">
          <div class="container-fluid">
            <a href="#" class="brand-logo right">
              <h3>Software & Web Developer</h3>
              <p>Han Sol Lee</p>
            </a>
            <ul class="left hide-on-med-and-down">
              <li><a href="#">MAIN</a></li>
              <li><a href="#">RESUME</a></li>
              <li><a href="#">PROJECT</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>

            <ul id="nav-mobile" class="side-nav" style={showNav}>
              <li><a href="#">Main</a></li>
              <li><a href="#">RESUME</a></li>
              <li><a href="#">PROJECT</a></li>
              <li><a href="#">CONTACT</a></li>
              <li><a href="#" onClick={this.handleToggle.bind(this)}><i  class="material-icons">swap_horiz</i></a></li>
            </ul>

            <a href="#" data-activates="nav-mobile" class="button-collapse" onClick={this.handleToggle.bind(this)}><i class="material-icons">list</i></a>
          </div>
        </nav>
    )
  }
}

function mapStateToProps(state) {
  return { toggle: state.toggle }
}

export default connect(mapStateToProps, actions)(Nav)
