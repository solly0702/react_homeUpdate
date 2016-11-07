import React, { Component } from "react";
import _ from "lodash";

import reasons from "../../../data/reasons"
import validate from "../../../../shared/validate/msg"
import TextFieldGroup from "../../components/common/textFieldGroup"

class MsgForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      reason: "",
      msg: "",
      errors: {},
      isLoading: false,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  isValid() {
    const { errors, isValid } = validate(this.state);

    if(!isValid) {
      this.setState({errors});
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault()
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true});

      this.props.msgSend(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: "success",
            text: "Thank you. I will contact you soon!"
          });
          this.setState({ isLoading: false, firstName: "", lastName: "" , email: "", reason: "", msg: "" })
        }
      ).catch(
        (err) => {
          if(err.response.status === 500) {
            this.props.addFlashMessage({
              type: "error",
              text: "Internal Server Error, Please Try Again!"
            })
          }
          this.setState({ errors: err.response.data, isLoading: false})
        }
      )
    }
  }

  render() {

    const { errors } = this.state;
    const options = _.map(reasons, (val, key) => <option key={key} value={val}>{val}</option>)

    return (
      <div class="row">
      <form onSubmit={this.onSubmit}>
        <div class="row">
          <TextFieldGroup
            grid="m6 s12"
            field="firstName"
            label="First Name *"
            value={this.state.firstName}
            onChange={this.onChange}
            error={errors.firstName}
          />

          <TextFieldGroup
            grid="m6 s12"
            field="lastName"
            label="Last Name *"
            value={this.state.lastName}
            onChange={this.onChange}
            error={errors.lastName}
          />
        </div>

        <div class="row">
          <TextFieldGroup
            grid="s12"
            field="email"
            label="Email *"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
            type="email"
          />
        </div>

        <div class="row">
          <div class="input-field col s12">
            <select name="reason" onChange={this.onChange} value={this.state.reason} id="reason" class="browser-default">
              <option value="" disabled>Please Choose Your Reason!</option>
              {options}
            </select>
            {errors.reason && <span class="errors">{errors.reason}</span>}
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <label for="msg">Message *</label>
            <textarea name="msg" type="text" id="msg" class={(errors.lastName ? "invalid" : "validate") + " materialize-textarea"} value={this.state.msg} onChange={this.onChange}/>
            {errors.msg && <span class="errors">{errors.msg}</span>}
          </div>
        </div>
        <button type="submit" class="btn waves-effect waves-light col s5 push-s7 transparent" disabled={this.state.isLoading}>Submit<i class="material-icons right">send</i></button>
      </form>
      </div>
    )
  }
}

MsgForm.propType = {
  msgSend: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default MsgForm;
