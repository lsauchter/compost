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
        {/* {errors && <div className={classes.error}>{errors}</div>} */}
        <h1>Log In</h1>
        <form action="/users/password" method="post">
          <div>
            <input type="hidden" name="authenticity_token" value={authenticityToken} />
            <TextField
              name="user[email]"
              label="Email"
              placeholder="Enter email address"
              autoComplete="username"
              id="email"
              className={classes.form}
            />
          </div>

          <div className={classes.buttons}>
            <div className={classes.button}>
              <Button component={Link} to="/users/sign_up">
                Sign Up
              </Button>
            </div>
            <div className={classes.button}>
              <Button size="large" variant="contained" type="submit" fullWidth>
                Reset Password
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
