import { Component, h } from "@stencil/core"
import { css } from "emotion"

const buttonStyles = css`
  color: white;
  font-size: 16px;
  background-color: blue;
  &:hover {
    background-color: purple;
  }
`

@Component({
  tag: "ni-footer",
  shadow: false,
})
export class Footer {
  render() {
    return (
      <div>
        <button class={buttonStyles}>
          <slot />
        </button>
      </div>
    )
  }
}
