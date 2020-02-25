import React from "react"
import styled from "@emotion/styled"

const Container = styled.section`
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;
  display: block;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`

const OrganicContainer = props => (
  <Container {...props}>{props.children}</Container>
)

export default OrganicContainer
