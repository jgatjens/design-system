/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

const Slogan = props => (
  <div
    css={{
      color: props.color,
      textAlign: "left",
      maxWidth: 150,
      border: `1px solid ${props.color}`,
      padding: "20px 25px",
    }}
  >
    {props.items.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
)

Slogan.propTypes = {
  color: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

Slogan.defaultProps = {
  color: "#000",
  items: ["Designing", "Resilent", "Brands"],
}

export default Slogan
