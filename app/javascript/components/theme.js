import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1e352f', contrastText: '#eeeeee' },
    secondary: { main: '#335145', contrastText: '#eeeeee' },
    info: { main: '#1e352f' },
    error: { main: '#8B2635' },
    text: { primary: '#eeeeee' },
    gray: '#eeeeee',
    blue: '#2E6F9E',
    red: '#8B2635',
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
