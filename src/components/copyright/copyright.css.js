import { css } from "emotion"

const container = css`
  font-family: "apercu-pro";
  display: flex;
  height: 103px;
  align-items: center;
  color: white;
  background-color: black;
  justify-content: space-between;
  padding: 0 25px;

  @media (max-width: 715px) {
    padding: 0 45px;
    flex-direction: column-reverse;
    padding-top: 40px;
    padding-bottom: 40px;
    height: auto;

    svg {
      margin: 25px 0 10px 0;
    }
  }
`

const text = css`
  font-size: 10px;
`

const links = css`
  font-size: 10px;
  a {
    color: white;
    text-decoration: none;
  }
  span {
    padding: 0 8px;
  }
`

export default {
  container,
  text,
  links,
}
