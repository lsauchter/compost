import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  '@global': {
    body: {
      margin: 0,
      color: `${theme.palette.gray} !important`,
      backgroundColor: theme.palette.darkGreen,
    },
  },

  header: {
    backgroundColor: theme.palette.darkGreen,
  },

  title: {
    margin: 'auto',
    paddingRight: 48,
  },

  body: {
    height: '100vh',
    backgroundSize: 'cover',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },

  weightCard: {
    margin: '94px auto 0',
    padding: 20,
    width: 300,
    maxWidth: '80%',
    height: 300,
    background: `linear-gradient(${theme.palette.lightGreen}dd, ${theme.palette.lightGreen}dd)`,
    textAlign: 'center',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },

  weightForm: {
    '& label.Mui-focused, .MuiFormHelperText-contained, .MuiInputBase-input, .MuiInputLabel-outlined': {
      color: theme.palette.gray,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.gray,
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset, &.Mui-focused fieldset, fieldset': {
        borderColor: theme.palette.gray,
      },
    },
    maxWidth: 'calc(100% - 81px)',
  },

  button: {
    color: theme.palette.darkGreen,
    height: 56,
    marginLeft: 15,
  },

  weightNumber: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 0,
  },

  unsplash: {
    position: 'fixed',
    bottom: 10,
    color: theme.palette.darkGreen,
    background: `linear-gradient(${theme.palette.gray}bb, ${theme.palette.gray}bb)`,
    padding: '5px 10px',
    borderRadius: 8,
    fontSize: 12,
    '& a': {
      display: 'inline-block',
      color: theme.palette.blue,
    },
    '& p': {
      display: 'inline-block',
      margin: 0,
    },
  },
}));
