import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const City = styled.div`
  padding-bottom: 28px;
  margin-bottom: 28px;
  max-width: 185px;
  border-bottom: 1px solid #d8d8d8;
  color: white;
  position: relative;
  z-index: 2;
  p {
    margin: 0;
  }
`
const Phone = styled.p`
  font-size: 16px;
`
const CityName = styled.p`
  padding-bottom: 12px;
`

const Cities = props => (
  <React.Fragment>
    {props.items.map((item, index) => (
      <City key={index}>
        <CityName>{item.city}</CityName>
        <Phone>{item.phone}</Phone>
      </City>
    ))}
  </React.Fragment>
)

Cities.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      phone: PropTypes.string,
    })
  ).isRequired,
}

Cities.defaultProps = {
  items: [
    { city: "New York", phone: "(212) 967-9087" },
    { city: "San Francisco", phone: "(415) 967-9087" },
    { city: "London", phone: "(020) 967-9087" },
  ],
}

export default Cities
