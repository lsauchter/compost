import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import useStyles from './useStyles';

const Weight = ({ totalWeight, updateWeight }) => {
  const [weight, updateFormWeight] = useState('');
  const [errors, updateErrors] = useState(null);
  const classes = useStyles();

  const handleSubmit = () => {
    console.log('submit', weight);
    if (weight) {
      updateWeight(weight)
    } else {
      updateErrors('Please enter a weight');
      setTimeout(() => updateErrors(null), 10000);
    }
  }

  const handlePressEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <div className={classes.weightCard}>
        <div>
          <TextField
            id="add_weight"
            label="Weight"
            type="number"
            variant="outlined"
            InputProps={{
              onKeyPress: handlePressEnter,
            }}
            onChange={e => updateFormWeight(e.target.value)}
            className={classes.weightForm}
            helperText={errors}
          />
          <Button variant="contained" className={classes.button} onClick={() => handleSubmit()}>Add</Button>
        </div>
        <div>
          Total Weight: {totalWeight}
        </div>
      </div>
    </>
  );
};

export default Weight;