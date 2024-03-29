import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import useStyles from './useStyles';

const ResetPassword = () => {
  const classes = useStyles();

  const authenticityToken = document.querySelector('meta[name="csrf-token"]')?.content;

  return (
    <>
      <div className={classes.weightCard}>
        <h1>Reset Password</h1>
        <form id="form" action="/users/password" method="post">
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
        </form>
        <div className={classes.buttons}>
          <div className={classes.button}>
            <Button component={Link} to="/users/sign_in" className={classes.link}>
              Back to Sign In
            </Button>
          </div>
          <div className={classes.button}>
            <Button variant="contained" type="submit" fullWidth form="form">
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
