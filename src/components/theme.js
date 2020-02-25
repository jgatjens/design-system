export const theme = {
  colors: {
    text: "#000000",
    background: "#fff",
    primary: "#07c",
    secondary: "#05a",
    accent: "#609",
    muted: "#f6f6f6f",
    black: "#000000",
    white: "#fff",
  },
  fonts: {
    body: "apercu-mono-pro",
    heading: "apercu-pro",
    monospace: "body",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [14, 16, 20, 30, 42, 60, 80, 100, 130],
  fontWeights: {
    body: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: 1,
      color: "colors.text",
      fontWeight: 600, // apercu-medium-pro
      margin: 0,
      marginBottom: 4,
    },
  },
  buttons: {
    primary: {
      fontSize: 3,
      color: "white",
      bg: "black",
      borderRadius: 0,
    },
    secondary: {
      fontSize: 3,
      color: "black",
      bg: "white",
      borderRadius: 0,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, 6, 8],
      lineHeight: ["65px", "65px", "143px"],
    },
    h2: {
      variant: "text.heading",
      fontSize: 2,
      fontFamily: "apercu-mono-pro",
      fontWeight: "normal",
    },
    h3: {
      variant: "text.heading",
      fontSize: [4, 4, 5],
    },
    p: {
      color: "colors.text",
      fontSize: 2,
      lineHeight: "24px",
    },
  },
}
