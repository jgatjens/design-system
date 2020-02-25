import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";

import media from "../media";
import image from "../../static/media/spotlight/3.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.mobile`
    padding-bottom: 64px;
    flex-direction: column-reverse;
  `}

  ${media.tablet`
    padding-top: 100px;
  `}
`;

const TextContainer = styled.div`
  max-width: 315px;
  h3 {
    margin-bottom: 25px;
    margin-top: 41px;
  }
  p {
    max-width: 250px;
  }
`;

const ImageContainer = styled.div`
  display: block;
`;

const ClientImage = styled.img`
  width: 100%;
  min-height: 100%;
  max-width: 823px;
`;

const SpotlightLeft = props => (
  <Container>
    <TextContainer>
      <Styled.h3>{props.title}</Styled.h3>
      <Styled.p>{props.tagLine}</Styled.p>
    </TextContainer>
    <ImageContainer>
      <ClientImage src={props.image} alt={props.title}></ClientImage>
    </ImageContainer>
  </Container>
);

SpotlightLeft.propTypes = {
  title: PropTypes.string,
  tagLine: PropTypes.string,
  image: PropTypes.string
};

SpotlightLeft.defaultProps = {
  title: "National Instruments",
  tagLine: "Industrial strength e-commerce",
  image: image
};

export default SpotlightLeft;
