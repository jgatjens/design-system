import { Component, Host, h } from "@stencil/core"
import { css } from "emotion"

const niGlobalCss = css`
  html,
  body {
    padding: 0;
    margin: 0;
    background: transparent;
    min-height: 100%;
  }
`

@Component({
  tag: "ni-global-css",
  // shadow: false,
  assetsDirs: ["fonts", "fonts/apercu-regular-pro"],
  styleUrls: [
    // Apercu pro
    "./fonts/apercu-regular-pro/stylesheet.css",
    // "./fonts/apercu-medium-pro/stylesheet.css",
    // "./fonts/apercu-bold-pro/stylesheet.css",
    // Apercu mono pro
    // "./fonts/apercu-mono-regular-pro/stylesheet.css",
    // "./fonts/apercu-mono-medium-pro/stylesheet.css",
    // "./fonts/apercu-mono-bold-pro/stylesheet.css",
  ],
})
export class NiGlobalCss {
  render() {
    return <Host class={niGlobalCss}></Host>
  }
}
