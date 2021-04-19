/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import useStyles from './useStyles';

const Landing = ({ userId }) => {
  const classes = useStyles();
  // const history = useHistory();

  const handleLogout = () => {
    const token = document.querySelector('meta[name="csrf-token"]');

    fetch('/users/sign_out', {
      method: 'DELETE',
      headers: {
        'X-CSRF-Token': token?.content,
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        console.log('logout');
      }
    });
  };

  return (
    <>
      <div className={classes.weightData}>
        {/* {errors && <div className={classes.error}>{errors}</div>} */}
        {userId ? (
          <Button onClick={handleLogout}>Logout</Button>
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
