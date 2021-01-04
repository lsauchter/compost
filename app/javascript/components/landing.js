/* eslint-disable react/no-unescaped-entities */
// <% if user_signed_in? %>
//     <%= link_to('Logout', destroy_user_session_path, method: :delete) %>
//   <% else %>
//     <%= link_to('Login', new_user_session_path)  %> |
//     <%= link_to('Sign Up', new_user_registration_path)  %>
//   <% end %>
// </nav>

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './useStyles';

const Landing = ({ userId }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.weightData}>
        {/* {errors && <div className={classes.error}>{errors}</div>} */}
        {userId ? (
          <div>Logout</div>
        ) : (
          <div>
            <div>Login</div>
            <div>Sign Up</div>
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
