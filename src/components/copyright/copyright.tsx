import { Component, h, Prop } from "@stencil/core"
import styles from "./copyright.css.js"
import { Icon } from "./icon"

@Component({
  tag: "ni-copyright",
  shadow: false,
})
export class Copyright {
  @Prop() text: string = "©2020 Organic, Inc. All rights reserved"
  @Prop() bg: string = "#000"
  @Prop() items: any = [
    { text: "Privacy Policy" },
    { text: "Consumer Privacy Shield" },
  ]
  render() {
    const items = JSON.parse(this.items)
    const bg = { backgroundColor: this.bg }

    return (
      <section class={styles.container} style={bg}>
        <p class={styles.text}>{this.text}</p>
        <a href="/">
          <Icon color="#fff" />
        </a>
        <nav class={styles.links}>
          {items.map(item => (
            <a href="#">
              {item.text}
              <span>|</span>
            </a>
          ))}
        </nav>
      </section>
    )
  }
}
