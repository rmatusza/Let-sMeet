import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import blue from "@material-ui/core/colors/blue"
const theme = createMuiTheme({
  gradientBackground: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  fontFamily: "Georgia",
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary:{
      main: '#023f57'
    }
  },
  typography: {
    fontFamily: "roboto",
    fonstSize: '50px'
  }
});
console.log(theme);
// '#1b4458'
const Theme = props => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default Theme;
