import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

import useStyles from './useStyles';

const SignIn = () => {
  const classes = useStyles();

  const authenticityToken = document.querySelector('meta[name="csrf-token"]')?.content;

  return (
    <>
      <div className={classes.weightData}>
        {/* {errors && <div className={classes.error}>{errors}</div>} */}
        <h1>Log In</h1>
        <form action="/users/sign_in" method="post">
          <div className={classes.textFields}>
            <input type="hidden" name="authenticity_token" value={authenticityToken} />
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                data-node="user_email_field"
                name="user[email]"
                placeholder="Enter email address"
                autoComplete="username"
                id="email"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                data-node="user_password_field"
                placeholder="Enter password"
                name="user[password]"
                type="password"
                autoComplete="current-password"
                className={classes.passwordTextField}
                id="password"
              />
              <div className={classes.forgotPassword}>
                <Button component={Link} to="/users/password/new">
                  Forgot Password
                </Button>
              </div>
            </FormGroup>
          </div>

          <div className={classes.buttons}>
            <div className={classes.button}>
              <Button component={Link} to="/users/sign_up">
                Sign Up
              </Button>
            </div>
            <div className={classes.button}>
              <Button size="large" variant="contained" type="submit" fullWidth>
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
