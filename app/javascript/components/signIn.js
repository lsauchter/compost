import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';

import useStyles from './useStyles';

const SignIn = ({ location }) => {
  const [checkbox, updateCheckbox] = useState(0);
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const buttonRef = useRef();
  const classes = useStyles();

  useEffect(() => {
    if (location.state) {
      updateEmail(location.state.email);
      updatePassword(location.state.password);
      buttonRef.current.focus();
    }
  }, [location]);

  const authenticityToken = document.querySelector('meta[name="csrf-token"]')?.content;

  return (
    <>
      <div className={classes.weightCard}>
        <h1 className={classes.heading}>Log In</h1>
        <form id="form" action="/users/sign_in" method="post">
          <div>
            <input type="hidden" name="authenticity_token" value={authenticityToken} />
            <TextField
              name="user[email]"
              placeholder="Enter email address"
              autoComplete="username"
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
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
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
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
          </div>
        </form>
        <div className={classes.buttons}>
          <div className={classes.forgotPassword}>
            <Button component={Link} to="/users/password/new" className={classes.link}>
              Forgot Password
            </Button>
          </div>
          <div className={classes.button}>
            <Button component={Link} to="/users/sign_up" className={classes.link}>
              Sign Up
            </Button>
          </div>
          <div className={classes.button}>
            <Button variant="contained" type="submit" fullWidth form="form" ref={buttonRef}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

SignIn.propTypes = {
  location: PropTypes.shape(),
};

SignIn.defaultProps = {
  location: { state: {} },
};

export default SignIn;
