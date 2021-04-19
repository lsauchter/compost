import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './useStyles';

const Layout = ({ children, photo, userId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginDemo = (event) => {
    event.preventDefault();
    fetch('/users/sign_in', {
      method: 'POST',
      body: JSON.stringify({
        user: { email: 'test@test.com', password: 'password' },
        authenticity_token: document.querySelector('meta[name="csrf-token"]')?.content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response);
        } else {
          history.go('/');
        }
      })
      .catch((err) => {
        console.log(err);
        // updateErrors(err);
        // setTimeout(() => updateErrors(null), 10000);
      });
    return true;
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
      <MenuItem onClick={handleClose}>
        <Link to="/history" className={classes.navLink}>
          All Data
        </Link>
      </MenuItem>
      {userId ? (
        <MenuItem>
          <a href="/users/sign_out" data-method="delete" className={classes.navLink}>
            Logout
          </a>
        </MenuItem>
      ) : (
        <MenuItem>
          <a href="/users/sign_in" className={classes.navLink}>
            Sign In
          </a>
        </MenuItem>
      )}
      <MenuItem>
        <a
          href="/"
          onClick={(event) => loginDemo(event)}
          className={classes.navLink}
          variant="text"
        >
          Demo
        </a>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar className={classes.header} color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.title}>
            <Typography variant="h1" noWrap>
              Compost
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <div
        className={classes.body}
        style={photo && { backgroundImage: `url(${photo.urls.regular})` }}
      >
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
    </>
  );
};

Layout.propTypes = {
  photo: PropTypes.shape(),
  children: PropTypes.node,
  userId: PropTypes.number,
};

Layout.defaultProps = {
  photo: {},
  children: {},
  userId: null,
};

export default Layout;
