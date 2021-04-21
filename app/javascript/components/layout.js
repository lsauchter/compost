import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './useStyles';

const Layout = ({ children, photo, userId, notifications }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showNotification, updateShowNotification] = useState(true);
  const classes = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const notification = (message, i) => {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={10000}
        open={showNotification}
        onClose={() => updateShowNotification(false)}
        key={i}
        className={classes.notification}
      >
        <Alert
          onClose={() => updateShowNotification(false)}
          severity={message[0] === 'alert' ? 'error' : 'success'}
          color={message[0] === 'alert' ? 'error' : 'info'}
        >
          {message[1]}
        </Alert>
      </Snackbar>
    );
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="options-menu"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <Link to="/" className={classes.navLink}>
          Home
        </Link>
      </MenuItem>
      {userId && (
        <MenuItem onClick={handleClose}>
          <Link to="/history" className={classes.navLink}>
            All Data
          </Link>
        </MenuItem>
      )}
      {userId ? (
        <MenuItem>
          <a href="/users/sign_out" data-method="delete" className={classes.navLink}>
            Logout
          </a>
        </MenuItem>
      ) : (
        <MenuItem onClick={handleClose}>
          <Link to="/users/sign_in" className={classes.navLink}>
            Sign In
          </Link>
        </MenuItem>
      )}
      {!userId && (
        <MenuItem onClick={handleClose}>
          <Link
            to={{
              pathname: '/users/sign_in',
              state: { email: 'test@test.com', password: 'password' },
            }}
            className={classes.navLink}
          >
            Demo
          </Link>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <>
      <AppBar className={classes.header} color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Button component="a" href="/" className={classes.title}>
            <Typography variant="h1">Compost</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <div
        className={classes.body}
        style={photo && { backgroundImage: `url(${photo.urls.regular})` }}
      >
        <div className={classes.container}>
          {notifications.length > 0 && notifications.map((message, i) => notification(message, i))}
          {children}
          {photo && (
            <div className={classes.unsplash}>
              Photo by{' '}
              <a href={`${photo.user.links.html}?utm_source=compost&utm_medium=referral`}>
                {photo.user.name}
              </a>{' '}
              on <a href="https://unsplash.com/?utm_source=compost&utm_medium=referral">Unsplash</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  photo: PropTypes.shape(),
  children: PropTypes.node,
  userId: PropTypes.number,
  notifications: PropTypes.oneOfType([PropTypes.shape(), PropTypes.array]),
};

Layout.defaultProps = {
  photo: {},
  children: {},
  userId: null,
  notifications: null,
};

export default Layout;
