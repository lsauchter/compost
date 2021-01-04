import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './useStyles';

const WeightData = () => {
  const [data, updateData] = useState([]);
  const [errors, updateErrors] = useState(null);
  const classes = useStyles();

  const getAllWeight = () => {
    fetch('weight', { method: 'GET' })
      .then((response) => response.json())
      .then((res) => {
        updateData(res.data);
      });
  };

  useEffect(() => {
    getAllWeight();
  }, []);

  const handleDelete = (id) => {
    fetch(`weight/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) throw Error(response);
      })
      .then(() => {
        getAllWeight();
      })
      .catch((err) => {
        updateErrors(err);
        setTimeout(updateErrors(null), 10000);
      });
  };

  return (
    <>
      <div className={classes.weightData}>
        {errors && <div className={classes.error}>{errors}</div>}
        <div className={classes.tableContainer}>
          <Table stickyHeader className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Weight</TableCell>
                <TableCell align="left">Date Added</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((item) => {
                  const dataDate = new Date(item.created_at);
                  const formattedDate = dataDate
                    .toLocaleString('en-US', { timezone: 'EST" ' })
                    .split(', ');

                  return (
                    <TableRow hover key={item.id}>
                      <TableCell align="left">{item.amount}</TableCell>
                      <TableCell align="left">
                        {formattedDate[0]}
                        <br />
                        {formattedDate[1]}
                      </TableCell>
                      <TableCell>
                        <IconButton aria-label="delete" onClick={() => handleDelete(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

WeightData.propTypes = {};

WeightData.defaultProps = {};

export default WeightData;
