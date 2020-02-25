import React from "react"
import PropTypes from "prop-types"

const DsButton = () => {
  return <button></button>
}

DsButton.propTypes = {
  text: PropTypes.string,
}

DsButton.defaultProps = {
  text: "Apply for this role",
}

export default DsButton
