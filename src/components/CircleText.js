import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import media from "./media";
import defaultImage from "../static/media/footer-email.png";

const TextContainer = styled.div`
  padding: 48px 0;
  max-width: 185px;
  color: white;
  position: relative;
  margin-bottom: 45px;
  p {
    position: relative;
    z-index: 2;
    margin: 0;
  }

  ${media.mobile`
    margin-left: 50px;
  `}
`;

const BgImage = styled.div`
  background-image: url(${defaultImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: 1;
  width: 276px;
  height: 158px;
  top: -25px;
  left: -40px;
`;

const CircleText = props => (
  <TextContainer>
    <BgImage />
    <p>{props.text}</p>
  </TextContainer>
);

CircleText.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.any
};

CircleText.defaultProps = {
  text: "hello@organic.com",
  image: defaultImage
};

export default CircleText;
