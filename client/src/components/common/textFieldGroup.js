import React from "react";

const textFieldGroup = ({grid, field, label, type, value, onChange, error }) => {
  return (
    <div class={"input-field col " + grid}>
      <label for={field}>{label}</label>
      <input name={field} type={type} id={field} value={value} onChange={onChange} class={error ? "invalid" : "validate"} />
      {error && <span class="errors">{error}</span>}
    </div>
  )
}

textFieldGroup.propTypes = {
  grid: React.PropTypes.string.isRequired,
  field: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  error: React.PropTypes.string
}

textFieldGroup.defaultProps = {
  type: "text"
}

export default textFieldGroup;
