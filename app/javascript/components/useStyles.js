import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  '@global': {
    body: {
      margin: 0,
      color: `${theme.palette.gray} !important`,
      backgroundColor: theme.palette.primary.main,
      height: '100vh',
    },
  },

  title: {
    margin: 'auto',
    paddingRight: 48,
    color: theme.palette.gray,
    textDecoration: 'none',
  },

  body: {
    height: '100vh',
    backgroundSize: 'cover',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },

  navLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },

  weightCard: {
    margin: '94px auto 0',
    padding: 20,
    width: 300,
    maxWidth: '80%',
    height: 400,
    background: `linear-gradient(${theme.palette.secondary.main}dd, ${theme.palette.secondary.main}dd)`,
    textAlign: 'center',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },

  weightFormContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  form: {
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
    '& input:-webkit-autofill': {
      '-webkit-box-shadow': `0 0 0 30px ${theme.palette.secondary.main} inset !important`,
      '-webkit-text-fill-color': `${theme.palette.gray} !important`,
    },
    maxWidth: 'calc(100% - 81px)',
    marginBottom: '10px !important',
  },

  button: {
    color: theme.palette.primary.main,
    height: 56,
    // marginLeft: 15,
  },

  link: {
    color: theme.palette.gray,
  },

  weightNumber: {
    fontWeight: 600,
    margin: '10px 0 0',
    fontSize: theme.typography.pxToRem(20),
  },

  unsplash: {
    position: 'fixed',
    bottom: 10,
    color: theme.palette.primary.main,
    background: `linear-gradient(${theme.palette.gray}bb, ${theme.palette.gray}bb)`,
    padding: '5px 10px',
    borderRadius: 8,
    fontSize: theme.typography.pxToRem(12),
    '& a': {
      display: 'inline-block',
      color: theme.palette.blue,
    },
    '& p': {
      display: 'inline-block',
      margin: 0,
    },
  },

  weightData: {
    margin: '94px auto 165px',
    maxWidth: '80%',
    background: `linear-gradient(${theme.palette.secondary.main}dd, ${theme.palette.secondary.main}dd)`,
    textAlign: 'center',
    borderRadius: 8,
    overflow: 'scroll',
  },

  table: {
    color: theme.palette.gray,
    borderRadius: 8,
    '& th': {
      color: theme.palette.gray,
      fontWeight: 600,
      background: theme.palette.primary.main,
    },
    '& td': {
      color: theme.palette.gray,
    },
    '& button': {
      color: theme.palette.gray,
    },
  },
}));
