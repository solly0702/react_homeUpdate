import React, { Component } from "react";
import classnames from "classnames";

class FlashMessage extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.id);
  }

  render() {
    const { id, message } = this.props;

    return (
      <div class={classnames("card", {
        "green lighten-1": message.type === "success",
        "red lighten-1"  : message.type === "error"
      })}>
        <div class="card-content white-text row">
          <p class="col s8">{message.text}</p>
          <button onClick={this.onClick} class="col s2 push-s1 transparent btn waves-effect waves-light" type="button"><p>X</p></button>
        </div>
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  id: React.PropTypes.string.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;
