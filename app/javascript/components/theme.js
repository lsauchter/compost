import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    darkGreen: '#1e352f',
    lightGreen: '#335145',
    gray: '#eeeeee',
    blue: '#2E6F9E',
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Raleway", "Caveat"',
    h1: {
      fontSize: 40,
      fontWeight: 500,
      fontFamily: 'Caveat',
    },
    body1: {
      fontFamily: 'Raleway',
    },
  },
});

export default theme;