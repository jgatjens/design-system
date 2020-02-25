import React from "react"
import PropTypes from "prop-types"
import media from "./media"
import Button from "./Buttons"
import Cities from "./Cities"
import CircleText from "./CircleText"
import styled from "@emotion/styled"

const FooterContainer = styled.footer`
  background-color: #000;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;

  align-content: space-around;
  width: 100%;
  padding: 100px 0;
  color: white;
  flex-direction: column;
  align-items: center;

  > div {
    margin: 0 25px;
  }

  ${media.desktop`
    align-items: flex-start;
    flex-direction: row;
    > div {
      margin: 0 50px;
    }
  `}

  ${media.mobile`
    padding: 90px 25px;

    /* button */
    a {
      max-width: 326px;
      margin-top: 50px;
    }
  `}
`

const SubTitle = styled.p`
  color: white;
`

const Title = styled.h2`
  font-size: 40px;
  line-height: 48px;
  margin-top: 0;
  font-family: "apercu-pro";
  max-width: 240px;
  margin-bottom: 60px;

  ${media.desktop`
    font-size: 48px;
    max-width: 270px;
    line-height: 58px;
    margin-bottom: 110px;
  `}
`

const Mobile = styled.div`
  display: block;
  ${media.desktop`
    display: none;
  `}
`

const RightCol = styled.div`
  display: none;
  width: 100%;
  ${media.desktop`
    width: 205px;
    display: block;
  `}
`

const EmailCities = () => (
  <React.Fragment>
    <CircleText />
    <Cities />
  </React.Fragment>
)

const CenterCol = props => (
  <div>
    <Title>{props.title}</Title>

    <Mobile>
      <EmailCities />
    </Mobile>

    <Button variant="secondary" icon href={props.btn.link}>
      {props.btn.text}
    </Button>
  </div>
)

const Footer = props => (
  <React.Fragment>
    <FooterContainer id="footer">
      <div>
        <SubTitle>{props.subtitle}</SubTitle>
      </div>
      <CenterCol {...props} />
      <RightCol>
        <EmailCities />
      </RightCol>
    </FooterContainer>
  </React.Fragment>
)

Footer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  btn: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  }),
}

Footer.defaultProps = {
  title: "Drop us a line or two or three",
  subtitle: "Get in Touch",
  btn: {
    text: "Contact us",
    link: "mailto:friends@organic.com",
  },
}

export default Footer
