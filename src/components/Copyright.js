import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { LogoLetters } from "./Logo"
import media from "./media"

const Container = styled.section`
  display: flex;
  height: 103px;
  align-items: center;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  justify-content: space-between;
  padding: 0 25px;

  ${media.desktop`
    padding: 0 45px;
  `}

  @media (max-width: 715px) {
    flex-direction: column-reverse;
    padding-top: 40px;
    padding-bottom: 40px;
    height: auto;

    svg {
      margin: 25px 0 10px 0;
    }
  }
`

const CopyrightText = styled.p`
  font-size: 10px;
`

const Links = styled.nav`
  font-size: 10px;
  a {
    color: ${props => props.color};
    text-decoration: none;
  }
  span {
    padding: 0 8px;
  }
`

const Copyright = props => (
  <Container {...props}>
    <CopyrightText>{props.title}</CopyrightText>
    <a href="/">
      <LogoLetters {...props} />
    </a>
    <Links color={props.color}>
      {props.items.map((item, i) => (
        <React.Fragment key={i}>
          <a href={item.link}>{item.text}</a>
          {i < props.items.length - 1 ? <span>|</span> : ""}
        </React.Fragment>
      ))}
    </Links>
  </Container>
)

Copyright.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

Copyright.defaultProps = {
  bgColor: "#000000",
  color: "#ffffff",
  title: "©2020 Organic, Inc. All rights reserved",
  items: [
    { text: "Privacy Policy", link: "#" },
    { text: "Consumer Privacy Shield", link: "#" },
  ],
}

export default Copyright
