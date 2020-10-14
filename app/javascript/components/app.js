import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import Layout from './layout';
import Weight from './weight';

const App = () => {
  const [totalWeight, updateTotalWeight] = useState(null)
  const [photoUrl, updatePhotoUrl] = useState(null);

  const getWeight = () => {
    fetch('weight', { method: 'GET' }).then(response => response.json())
    .then(res => {
      console.log('res', res);
      updateTotalWeight(res);
    });
  };

  const getBackground = () => {
    fetch('https://api.unsplash.com/photos/random?query=leaves', {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
      },
    }).then(response => response.json())
    .then(res => {
      console.log('photo res', res);
      updatePhotoUrl(res.urls.regular)
    });
  };

  useEffect(() => {
    getWeight();
    getBackground();
  }, []);

  const onUpdateWeight = weight => {
    fetch('weight', { 
      method: 'POST',
      body: JSON.stringify({ amount: weight }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
    .then(res => {
      console.log('res', res);
      getWeight();
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout background={photoUrl}>
        <Weight totalWeight={totalWeight} updateWeight={onUpdateWeight}/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;