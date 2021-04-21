import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import useStyles from './useStyles';

const SignUpConfirmation = () => {
  const classes = useStyles();

  const authenticityToken = document.querySelector('meta[name="csrf-token"]')?.content;

  return (
    <>
      <div className={classes.weightCard}>
        <h1>Resend Confirmation Instructions</h1>
        <form action="/users/confirmation" method="post">
          <div>
            <input type="hidden" name="authenticity_token" value={authenticityToken} />
            <TextField
              name="user[email]"
              label="Email"
              placeholder="Enter email address"
              autoComplete="username"
              id="email"
              variant="outlined"
              required
              className={classes.form}
            />
          </div>

          <div className={classes.buttons}>
            <div className={classes.button}>
              <Button component={Link} to="/users/sign_in" className={classes.link}>
                Back to Sign In
              </Button>
            </div>
            <div className={classes.button}>
              <Button size="large" variant="contained" type="submit" fullWidth>
                Resend Instructions
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpConfirmation;
