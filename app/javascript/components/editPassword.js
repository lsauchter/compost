import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import useStyles from './useStyles';

const EditPassword = () => {
  const [password, updatePassword] = useState('');
  const [passwordConfirmation, updatePasswordConfirmation] = useState('');
  const classes = useStyles();

  const authenticityToken = document.querySelector('meta[name="csrf-token"]')?.content;
  const resetPasswordToken = useLocation().search.split('=') || [];

  return (
    <>
      <div className={classes.weightCard}>
        <h1>Set Your Password</h1>
        <form id="form" action="/users/password" method="post">
          <div>
            <input type="hidden" name="authenticity_token" value={authenticityToken} />
            <input type="hidden" name="user[reset_password_token]" value={resetPasswordToken[1]} />
            <input type="hidden" name="_method" value="put" />
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
              placeholder="Confirm password"
              name="user[password_confirmation]"
              type="password"
              autoComplete="new-password"
              id="password"
              label="Password"
              variant="outlined"
              required
              className={classes.form}
              value={passwordConfirmation}
              onChange={(e) => updatePasswordConfirmation(e.target.value)}
              helperText={password && password !== passwordConfirmation && 'Passwords must match'}
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
              Set Password
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPassword;
