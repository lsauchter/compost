import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './useStyles';

const Layout = ({ children, photo }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // eslint-disable-next-line no-unused-vars
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="options-menu"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Background</MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar className={classes.header}>
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
          <Typography variant="h1" noWrap className={classes.title}>
            Compost
          </Typography>
        </Toolbar>
      </AppBar>
      {/* {renderMenu} */}
      <div
        className={classes.body}
        style={photo && { backgroundImage: `url(${photo.urls.regular})` }}
      >
        {children}
        {photo && (
          <div className={classes.unsplash}>
            Photo by{' '}
            <a
              href={`${photo.user.links.html}?utm_source=compost&utm_medium=referral`}
            >
              {photo.user.name}
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/?utm_source=compost&utm_medium=referral">
              Unsplash
            </a>
          </div>
        )}
      </div>
    </>
  );
};

Layout.propTypes = {
  photo: PropTypes.shape(),
  children: PropTypes.node,
};

Layout.defaultProps = {
  photo: {},
  children: {},
};

export default Layout;
