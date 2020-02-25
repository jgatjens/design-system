import React from "react";
import {
  SpotlightTop,
  SpotlightBottom,
  SpotlightLeft,
  SpotlightRight
} from "../components/spotlight";

export default {
  title: "Spotlights",
  component: SpotlightTop
};

const Wrapper = props => (
  <div style={{ backgroundColor: "white", padding: "40px" }}>
    {props.children}
  </div>
);

export const SpotlightTopDefault = () => (
  <Wrapper>
    <SpotlightTop />
  </Wrapper>
);
export const SpotlightBottomDefault = () => (
  <Wrapper>
    <SpotlightBottom />
  </Wrapper>
);
export const SpotlightLeftDefault = () => (
  <Wrapper>
    <SpotlightLeft />
  </Wrapper>
);
export const SpotlightRightDefault = () => (
  <Wrapper>
    <SpotlightRight />
  </Wrapper>
);
