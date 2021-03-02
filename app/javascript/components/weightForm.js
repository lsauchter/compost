import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';

import useStyles from './useStyles';

const WeightForm = () => {
  const [weightInfo, updateWeightInfo] = useState(null);
  const [weight, updateFormWeight] = useState('');
  const [errors, updateErrors] = useState(null);
  const classes = useStyles();

  const getWeight = () => {
    fetch('weight/all', { method: 'GET' })
      .then((response) => response.json())
      .then((res) => {
        updateWeightInfo(res);
      });
  };

  useEffect(() => {
    getWeight();
  }, []);

  const updateWeight = () => {
    fetch('weight', {
      method: 'POST',
      body: JSON.stringify({ amount: weight }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        getWeight();
      });
  };

  const handleSubmit = () => {
    if (weight) {
      updateWeight(weight);
      updateFormWeight('');
    } else {
      updateErrors('Please enter a weight');
      setTimeout(() => updateErrors(null), 10000);
    }
  };

  const handlePressEnter = (event) => {
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
            value={weight}
            onChange={(e) => updateFormWeight(e.target.value)}
            className={classes.weightForm}
            helperText={errors}
          />
          <Button variant="contained" className={classes.button} onClick={() => handleSubmit()}>
            Add
          </Button>
        </div>
        <div className={classes.weightNumberContainer}>
          Total compost
          <p className={classes.weightNumber}>{weightInfo?.total} pounds</p>
        </div>
        <div className={classes.weightNumberContainer}>
          Average compost per week
          <p className={classes.weightNumber}>{weightInfo?.average} pounds</p>
        </div>
      </div>
    </>
  );
};

export default WeightForm;
