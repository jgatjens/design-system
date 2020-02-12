import { css } from "emotion"

const container = css`
  background-color: #000;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;

  align-content: space-around;
  width: 100%;
  padding: 100px 0;
  color: white;
  flex-direction: row;
  justify-content: center;

  > div {
    margin: 0 25px;
  }

  @media (max-width: 715px) {
    align-items: flex-start;
    flex-direction: row;
    > div {
      margin: 0 50px;
    }
  }

  @media (max-width: 714px) {
    padding: 90px 25px;
    a {
      max-width: 326px;
      margin-top: 50px;
    }
  }
`

const subTitle = css`
  color: white;
  font-family: "apercu-pro";
`

const subTitleContainer = css`
  width: 100%;
  @media (min-width: 715px) {
    width: 205px;
  }
`

const title = css`
  font-size: 40px;
  line-height: 48px;
  margin-top: 0;
  font-family: "apercu-pro";
  max-width: 240px;
  margin-bottom: 60px;

  @media (max-width: 715px) {
    font-size: 48px;
    max-width: 270px;
    line-height: 58px;
    margin-bottom: 110px;
  }
`

const mobile = css`
  display: block;
  @media (min-width: 714px) {
    display: none;
  }
`

const rightCol = css`
  display: none;
  width: 100%;
  @media (min-width: 715px) {
    width: 205px;
    display: block;
  }
`

export default {
  container,
  title,
  subTitle,
  subTitleContainer,
  mobile,
  rightCol,
}
