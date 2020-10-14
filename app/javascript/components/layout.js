import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './useStyles';

const Layout = ({ children, background }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='options-menu'
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
      {renderMenu}
      <div className={classes.body} style={{backgroundImage: `url(${background})`}}>
        {children}
      </div>
    </>
  );
};

export default Layout;