import { Component, h, Prop } from "@stencil/core"
import styles from "./copyright.css.js"
import { Icon } from "./icon"

const items = [{ text: "Privacy Policy" }, { text: "Consumer Privacy Shield" }]

@Component({
  tag: "ni-copyright",
  shadow: false,
})
export class Copyright {
  @Prop() text: string = "©2020 jgatjens.com, Inc. All rights reserved"
  @Prop() bg: string = "#000"
  @Prop() items: any

  componentWillLoad() {
    try {
      this.items = JSON.parse(this.items)
    } catch (error) {
      this.items = items
      console.warn("<copyright items={JSON String}> cant parse json string")
    }
  }

  renderLinks() {
    return this.items.map((item, i) => (
      <a href="#">
        {item.text}

        {i < this.items.length - 1 ? <span>|</span> : ""}
      </a>
    ))
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
