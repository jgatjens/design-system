import React from "react";
import PropTypes from "prop-types";

const DsButton = props => {
  return <button>{props.text}</button>;
};

DsButton.propTypes = {
  text: PropTypes.string
};

DsButton.defaultProps = {
  text: "Apply for this role"
};

export default DsButton;
