import { Component, h, Prop } from "@stencil/core"
import styles from "./copyright.css.js"
import { Icon } from "./icon"

export interface item {
  text?: string
}

@Component({
  tag: "ni-copyright",
  shadow: false,
})
export class Copyright {
  @Prop() title: string = "©2020 Organic, Inc. All rights reserved"
  @Prop() items: any = [
    { text: "Privacy Policy" },
    { text: "Consumer Privacy Shield" },
  ]

  render() {
    console.log(this.items)
    const items = JSON.parse(this.items)
    return (
      <section class={styles.container}>
        <p class={styles.text}>{this.title}</p>
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
