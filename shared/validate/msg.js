import Validator from "validator";
import _ from "lodash";

export default function validate(data) {
  let errors = {};
  let requiredField = "This field is required";

  if(Validator.isEmpty(data.firstName)) {
    errors.firstName = requiredField;
  }
  if(Validator.isEmpty(data.lastName)) {
    errors.lastName = requiredField;
  }
  if(Validator.isEmpty(data.email)) {
    errors.email = requiredField;
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if(Validator.isEmpty(data.reason)) {
    errors.reason = requiredField;
  }
  if(Validator.isEmpty(data.msg)) {
    errors.msg = "This field is required";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
