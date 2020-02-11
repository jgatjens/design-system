import { Component, h, Prop } from "@stencil/core"
import styles from "./copyright.css.js"
import { Icon } from "./icon"

export interface Item {
  text?: string
  link?: string
}

export interface Data {
  title?: string
  items?: Item[]
}

@Component({
  tag: "ni-copyright",
  shadow: false,
})
export class Copyright {
  @Prop() data: Data = {
    title: "©2020 Organic, Inc. All rights reserved",
    items: [
      { text: "Privacy Policy", link: "#" },
      { text: "Consumer Privacy Shield", link: "#" },
    ],
  }

  render() {
    return (
      <section class={styles.container}>
        <p class={styles.text}>©2020 Organic, Inc. All rights reserved</p>
        <a href="/">
          <Icon color="#fff" />
        </a>
        <nav class={styles.links}>
          {this.data.items.map(item => (
            <a href={item.link}>
              {item.text}
              <span>|</span>
            </a>
          ))}
        </nav>
      </section>
    )
  }
}
