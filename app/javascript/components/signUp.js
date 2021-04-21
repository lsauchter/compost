import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

import useStyles from './useStyles';

const SignUp = () => {
  const [password, updatePassword] = useState('');
  const [passwordConfirmation, updatePasswordConfirmation] = useState('');
  const classes = useStyles();

  const authenticityToken = document.querySelector('meta[name="csrf-token"]')?.content;

  return (
    <>
      <div className={classes.weightCard}>
        <h1 className={classes.heading}>Sign Up</h1>
        <form id="form" action="/users" method="post">
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
              autoComplete="new-password"
              id="password"
              label="Password"
              variant="outlined"
              required
              className={classes.form}
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              helperText={
                password && password.length < 6 && 'Password must be at least 6 characters'
              }
            />
            <TextField
              placeholder="Enter password"
              name="user[password_confirmation]"
              type="password"
              autoComplete="new-password"
              id="password"
              label="Confirm Password"
              variant="outlined"
              required
              className={classes.form}
              value={passwordConfirmation}
              onChange={(e) => updatePasswordConfirmation(e.target.value)}
              helperText={password && password !== passwordConfirmation && 'Passwords must match'}
            />
          </div>
        </form>
        <div>
          <div className={classes.button}>
            <Button component={Link} to="/users/sign_in" className={classes.link}>
              Back to Sign In
            </Button>
          </div>
          <div className={classes.button}>
            <Button component={Link} to="/users/confirmation/new" className={classes.link}>
              Didn't receive confirmation instructions?
            </Button>
          </div>
          <div className={classes.button}>
            <Button variant="contained" type="submit" fullWidth form="form">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
