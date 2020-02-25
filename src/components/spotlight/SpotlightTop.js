import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";

import media from "../media";
import image from "../../static/media/spotlight/1.jpg";

const Container = styled.div`
  padding-top: 47px;
  display: flex;
  flex-direction: column;
  ${media.mobile`
    flex-direction: column-reverse;
    padding-bottom: 64px;
  `}
`;

const TextContainer = styled.div`
  max-width: 515px;
  h3 {
    margin-bottom: 25px;
    margin-top: 41px;
  }
`;

const ImageContainer = styled.div`
  display: block;
`;

const ClientImage = styled.img`
  width: 100%;
  min-height: 100%;
  max-width: 718px;
  ${media.desktop`
    margin-top: 100px;
  `}
`;

const SpotlightTop = props => (
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

SpotlightTop.propTypes = {
  title: PropTypes.string,
  tagLine: PropTypes.string,
  image: PropTypes.string
};

SpotlightTop.defaultProps = {
  title: "American Family Insurance",
  tagLine: "Reimagining the experience of the insured",
  image: image
};

export default SpotlightTop;
