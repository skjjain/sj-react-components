import React from "react";
import PropTypes from "prop-types";

function Button({ label, onClick, backgroundColor }) {
  return (
    <button onClick={onClick} style={backgroundColor && { backgroundColor }}>
      {label}
    </button>
  );
}

Button.prototype = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};

export default Button;
