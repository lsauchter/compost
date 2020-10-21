import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

import useStyles from './useStyles';

const WeightForm = ({ totalWeight, updateWeight }) => {
  const [weight, updateFormWeight] = useState('');
  const [errors, updateErrors] = useState(null);
  const classes = useStyles();

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
        <div>
          Total Weight
          <p className={classes.weightNumber}>{totalWeight} pounds</p>
        </div>
      </div>
    </>
  );
};

WeightForm.propTypes = {
  totalWeight: PropTypes.string,
  updateWeight: PropTypes.func.isRequired,
};

WeightForm.defaultProps = {
  totalWeight: '',
};

export default WeightForm;
