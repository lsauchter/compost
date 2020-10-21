import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from './theme';

import Layout from './layout';
import Weight from './weight';

const App = () => {
  const [totalWeight, updateTotalWeight] = useState(null);
  const [photo, updatePhoto] = useState(null);

  const getWeight = () => {
    fetch('weight', { method: 'GET' })
      .then((response) => response.json())
      .then((res) => {
        updateTotalWeight(res);
      });
  };

  const getBackground = () => {
    fetch('https://api.unsplash.com/photos/random?query=leaves', {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        updatePhoto(res);
      });
  };

  useEffect(() => {
    getWeight();
    getBackground();
  }, []);

  const onUpdateWeight = (weight) => {
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

  return (
    <ThemeProvider theme={theme}>
      <Typography component="div">
        <Layout photo={photo}>
          <Weight totalWeight={totalWeight} updateWeight={onUpdateWeight} />
        </Layout>
      </Typography>
    </ThemeProvider>
  );
};

export default App;
