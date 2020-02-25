import { css } from "@emotion/core"
import { theme } from "./theme"

const sizesMobileFist = {
  tablet: theme.breakpoints[1],
  desktop: theme.breakpoints[2],
}

const sizesMobile = {
  mobile: theme.breakpoints[0],
}

const createMedia = (items, media = "min-width") => {
  return Object.keys(items).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (${media}: ${items[label]}) {
        ${css(...args)};
      }
    `
    return acc
  }, {})
}

const media = {
  ...createMedia(sizesMobileFist),
  ...createMedia(sizesMobile, "max-width"),
}

// ejample
/* 
${media.desktop`
  margin-bottom: 110px;
`} 
*/
export default media
