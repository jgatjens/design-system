import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";

import media from "../media";
import image from "../../static/media/spotlight/4.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  ${media.mobile`
    flex-direction: column-reverse;
    align-items: flex-start;
    align-ti
    padding-bottom: 64px;
  `}

  ${media.tablet`
    padding-top: 100px;
  `}
`;

const TextContainer = styled.div`
  h3 {
    margin-bottom: 25px;
    margin-top: 41px;
  }
  ${media.desktop`
    padding-left: 77px;
    padding-bottom: 10px;
  `}
`;

const ImageContainer = styled.div`
  display: block;
`;

const ClientImage = styled.img`
  width: 100%;
  min-height: 100%;
  max-width: 823px;
`;

const SpotlightRight = props => (
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

SpotlightRight.propTypes = {
  title: PropTypes.string,
  tagLine: PropTypes.string,
  image: PropTypes.string
};

SpotlightRight.defaultProps = {
  title: "Wells Fargo",
  tagLine: "Brand transformation through channels",
  image: image
};

export default SpotlightRight;
