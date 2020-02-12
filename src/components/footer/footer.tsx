import { Component, h, FunctionalComponent } from "@stencil/core"
import styles from "./footer.css.js"

interface CenterColProps {
  title?: string
}

const EmailCities: FunctionalComponent = () => (
  <section>
    <ni-circle-text></ni-circle-text>
    <ni-cities></ni-cities>
  </section>
)

const CenterCol: FunctionalComponent<CenterColProps> = props => (
  <div>
    <h2 class={styles.title}>{props.title}</h2>
    <div class={styles.mobile}>
      <EmailCities />
    </div>
    <button>contac us</button>
  </div>
)

// const CenterCol = props => (
//   <Box sx={{ width: ["100%", 307] }}>
//     <Button variant="secondary" icon href="#">
//       Contact us
//     </Button>
//   </Box>
// )

@Component({
  tag: "ni-footer",
  shadow: false,
})
export class Footer {
  render() {
    return (
      <footer class={styles.container}>
        <div class={styles.subTitleContainer}>
          <p class={styles.subTitle}>Get in Touch</p>
        </div>
        <CenterCol title="Drop us a line or two or three" />
        <div class={styles.rightCol}>
          <EmailCities />
        </div>
      </footer>
    )
  }
}
