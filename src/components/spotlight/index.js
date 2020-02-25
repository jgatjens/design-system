import React from "react"
import styled from "@emotion/styled"
import { Styled } from "theme-ui"

import OrganicContainer from "../Container"
import media from "../media"
import SpotlightTop from "./SpotlightTop"
import SpotlightBottom from "./SpotlightBottom"
import SpotlightLeft from "./SpotlightLeft"
import SpotlightRight from "./SpotlightRight"

const Container = styled(OrganicContainer)`
  padding-bottom: 144px;
  padding-top: 62px;

  ${media.mobile`
    padding-left: 25px;
    padding-right: 25px;
  `}

  ${media.tablet`
    padding-bottom: 320px;
    padding-top: 213px;
  `}
`

const CustomSpotlightBottom = styled(SpotlightBottom)`
  ${media.desktop`
    margin-top: -537px;
    margin-right: 102px;
  `}
`

const CustomSpotlightRight = styled(SpotlightRight)`
  ${media.desktop`
    margin-top: -163px;
  `}
`

const Spotlight = props => (
  <Container>
    <Styled.h2>Clients</Styled.h2>
    <SpotlightTop />
    <CustomSpotlightBottom />
    <SpotlightLeft />
    <CustomSpotlightRight />
  </Container>
)

export { default as SpotlightTop } from "./SpotlightTop"
export { default as SpotlightBottom } from "./SpotlightBottom"
export { default as SpotlightLeft } from "./SpotlightLeft"
export { default as SpotlightRight } from "./SpotlightRight"

export default Spotlight
