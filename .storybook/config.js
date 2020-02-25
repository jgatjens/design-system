import React, { Fragment } from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, Box } from "theme-ui";
// ds
import { theme } from "../src/components/theme";
import GlobalStyles from "../src/components/GlobalStyles";

addDecorator(story => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Box p={3}>{story()}</Box>
    </ThemeProvider>
  </Fragment>
));
