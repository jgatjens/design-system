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

  componentWillLoad() {
    try {
      this.items = JSON.parse(this.items)
    } catch (error) {
      this.items = []
      console.warn("<copyright item={JSON String}> cant parse json string")
    }
  }

  renderLinks() {
    if (this.items.length > 0) {
      return this.items.map(item => (
        <a href="#">
          {item.text}
          <span>|</span>
        </a>
      ))
    }
  }

  render() {
    const bg = { backgroundColor: this.bg }

    return (
      <section class={styles.container} style={bg}>
        <p class={styles.text}>{this.text}</p>
        <a href="/">
          <Icon color="#fff" />
        </a>
        <nav class={styles.links}>{this.renderLinks()}</nav>
      </section>
    )
  }
}
