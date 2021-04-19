/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import useStyles from './useStyles';

const Landing = ({ userId }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.weightData}>
        {/* {errors && <div className={classes.error}>{errors}</div>} */}
        {userId ? (
          <a href="/users/sign_out" data-method="delete" className={classes.navLink}>
            Logout
          </a>
        ) : (
          <div>
            <Button component={Link} to="/users/sign_in">
              Login
            </Button>
            <Button component={Link} to="/users/sign_up">
              Sign Up
            </Button>
          </div>
        )}
        <h1>Welcome</h1>
        <p>
          If you're logged in, check out <Link to="/app">the app</Link>!
        </p>
      </div>
    </>
  );
};

Landing.propTypes = {
  userId: PropTypes.number,
};

Landing.defaultProps = {
  userId: null,
};

export default Landing;
