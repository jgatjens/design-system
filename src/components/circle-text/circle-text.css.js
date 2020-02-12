import { css } from "emotion"
import { getAssetPath } from "@stencil/core"
const container = css`
  font-family: "apercu-pro";
  padding: 48px 0;
  max-width: 185px;
  color: white;
  position: relative;
  margin-bottom: 45px;
  p {
    position: relative;
    z-index: 2;
    margin: 0;
    font-weight: normal;
  }

  @media (min-width: 715px) {
    margin-left: 50px;
  }
`

const bgImage = css`
  background-image: url(${getAssetPath(`./assets/footer-email.png`)});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: 1;
  width: 276px;
  height: 158px;
  top: -25px;
  left: -50px;
`

export default {
  container,
  bgImage,
}
