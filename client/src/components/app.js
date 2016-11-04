import React, { Component } from "react";

import Footer from "../containers/footer";

import "../../style/style.scss";

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App
