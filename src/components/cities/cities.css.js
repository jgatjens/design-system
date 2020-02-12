import { css } from "emotion"

const container = css`
  font-family: "apercu-pro";
  padding-bottom: 28px;
  margin-bottom: 28px;
  max-width: 185px;
  border-bottom: 1px solid #d8d8d8;
  color: white;
  position: relative;
  z-index: 2;

  p {
    margin: 0;
  }
`
const phone = css`
  font-size: 16px;
`
const city = css`
  padding-bottom: 12px;
`

export default {
  container,
  phone,
  city,
}
