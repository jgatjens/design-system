import { Component, h, Prop } from "@stencil/core"
import styles from "./circle-text.css.js"

@Component({
  tag: "ni-circle-text",
  shadow: false,
  assetsDir: "assets",
})
export class CircleText {
  @Prop() text: string = "jgatjens@gmail.com"

  render() {
    return (
      <section class={styles.container}>
        <div class={styles.bgImage}></div>
        <p>{this.text}</p>
      </section>
    )
  }
}
