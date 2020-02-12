import { Component, Prop, h } from "@stencil/core"
import styles from "./cities.css.js"

@Component({
  tag: "ni-cities",
  shadow: false,
})
export class Cities {
  @Prop() items: any = [
    { city: "New York", phone: "(212) 967-9087" },
    { city: "San Francisco", phone: "(415) 967-9087" },
    { city: "London", phone: "(020) 967-9087" },
  ]

  render() {
    return this.items.map(item => (
      <div class={styles.container}>
        <p class={styles.city}>{item.city}</p>
        <p class={styles.phone}>{item.phone}</p>
      </div>
    ))
  }
}
