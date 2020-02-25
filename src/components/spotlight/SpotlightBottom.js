import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";

import media from "../media";
import image from "../../static/media/spotlight/2.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  ${media.mobile`
  padding-bottom: 64px;
  `}
  ${media.tablet`
    padding-top: 47px;
  `}
`;

const TextContainer = styled.div`
  max-width: 515px;
  width: 100%;
  h3 {
    margin-top: 61px;
    margin-bottom: 25px;
  }
`;

const ImageContainer = styled.div`
  display: block;
`;

const ClientImage = styled.img`
  width: 100%;
  min-height: 100%;
  max-width: 515px;
`;

const SpotlightBottom = props => (
  // className is need to extend css
  <Container className={props.className}>
    <TextContainer>
      <Styled.h3>{props.title}</Styled.h3>
      <Styled.p>{props.tagLine}</Styled.p>
    </TextContainer>
    <ImageContainer>
      <ClientImage src={props.image} alt={props.title}></ClientImage>
    </ImageContainer>
  </Container>
);

SpotlightBottom.propTypes = {
  title: PropTypes.string,
  tagLine: PropTypes.string,
  image: PropTypes.string
};

SpotlightBottom.defaultProps = {
  title: "Carters",
  tagLine: "Transformational shopping design",
  image: image
};

export default SpotlightBottom;
