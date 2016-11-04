import React, { Component } from "react";
import { connect } from "react-redux"
import _ from "lodash"
import { deleteFlashMessage } from "../../actions/FlashMessages"

import FlashMessage from "./FlashMessage"

class FlashMessagesList extends Component {
  render() {
    const messages = _.map(this.props.messages, (val, key) =>
      <FlashMessage key={key} id={key} message={val} deleteFlashMessage={this.props.deleteFlashMessage} />
    )

    return (
      <div class="flash-message">
        {messages}
      </div>
    );
  }
}

FlashMessagesList.propTypes = {
  messages: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
