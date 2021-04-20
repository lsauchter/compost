import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import useStyles from './useStyles';

const EditPassword = () => {
  const classes = useStyles();

  const authenticityToken = document.querySelector('meta[name="csrf-token"]')?.content;
  const resetPasswordToken = useLocation().search.split('=') || [];

  return (
    <>
      <div className={classes.weightCard}>
        {/* {errors && <div className={classes.error}>{errors}</div>} */}
        <h1>Set Your Password</h1>
        <form action="/users/password" method="post">
          <div>
            <input type="hidden" name="authenticity_token" value={authenticityToken} />
            <input type="hidden" name="user[reset_password_token]" value={resetPasswordToken[1]} />
            <input type="hidden" name="_method" value="put" />
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
            <TextField
              placeholder="Confirm password"
              name="user[password_confirmation]"
              type="password"
              autoComplete="current-password"
              id="password"
              label="Password"
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
              <Button variant="contained" type="submit" fullWidth>
                Set Password
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPassword;
