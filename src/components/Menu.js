import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

import media from "./media"

const Container = styled.nav`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  height: ${props => (props.smallNav ? "60px" : "102px")};
  background-color: white;
  position: relative;
  z-index: 10;
  overflow: auto;
  width: 100%;
  max-width: 303px;

  ${media.mobile`
    min-width: 180px;
  `}
`

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.color || "#313131"};
  position: relative;
  font-size: 14px;

  &:after {
    content: "";
    width: ${props => (props.active ? "100%" : "0px")};
    bottom: -8px;
    height: 0px;
    left: 0;
    position: absolute;
    border-bottom: 2px solid ${props => props.color || "#313131"};
    transition: width 500ms ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }

  span {
    position: relative;
    transition: left 500ms ease-in-out;
    left: 0;
    &:hover {
      left: -8px;
    }
  }
`

const Menu = props => (
  <Container {...props}>
    {props.items.map(item => {
      let link = { ...item }
      if (props.activeMenu === item.name) {
        link.active = true
      }

      return (
        <Link {...link} key={item.link} href={item.link}>
          <span>{item.name}</span>
        </Link>
      )
    })}
  </Container>
)

Menu.propTypes = {
  activeMenu: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
}

Menu.defaultProps = {
  items: [
    {
      name: "careers",
      text: "Careers",
      link: "/careers",
    },
    {
      name: "contact",
      text: "Contact",
      link: "/contact",
    },
  ],
}

export default Menu
