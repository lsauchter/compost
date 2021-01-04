import React from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './useStyles';

const SignIn = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.weightData}>
        {/* {errors && <div className={classes.error}>{errors}</div>} */}
        <h1>Log In</h1>
      </div>
    </>
  );
};

export default SignIn;
