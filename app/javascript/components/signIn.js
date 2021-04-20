import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';

import useStyles from './useStyles';

const SignIn = () => {
  const [checkbox, updateCheckbox] = useState(0);
  const classes = useStyles();

  const authenticityToken = document.querySelector('meta[name="csrf-token"]')?.content;

  return (
    <>
      <div className={classes.weightCard}>
        {/* {errors && <div className={classes.error}>{errors}</div>} */}
        <h1 className={classes.heading}>Log In</h1>
        <form action="/users/sign_in" method="post">
          <div>
            <input type="hidden" name="authenticity_token" value={authenticityToken} />
            <TextField
              name="user[email]"
              placeholder="Enter email address"
              autoComplete="username"
              id="email"
              label="Email"
              variant="outlined"
              required
              className={classes.form}
            />
            <TextField
              placeholder="Enter password"
              name="user[password]"
              type="password"
              autoComplete="current-password"
              id="password"
              label="Password"
              variant="outlined"
              required
              className={classes.form}
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => updateCheckbox(checkbox === 1 ? 0 : 1)}
                  name="user[remember_me]"
                  className={classes.checkbox}
                  value={checkbox}
                />
              }
              label="Remember Me"
            />
            <div className={classes.forgotPassword}>
              <Button component={Link} to="/users/password/new" className={classes.link}>
                Forgot Password
              </Button>
            </div>
          </div>

          <div className={classes.buttons}>
            <div className={classes.button}>
              <Button component={Link} to="/users/sign_up" className={classes.link}>
                Sign Up
              </Button>
            </div>
            <div className={classes.button}>
              <Button variant="contained" type="submit" fullWidth>
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
