import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from './theme';

import Layout from './layout';
import WeightForm from './weightForm';
import WeightData from './weightData';

const App = () => {
  const [totalWeight, updateTotalWeight] = useState(null);
  const [photo, updatePhoto] = useState(null);

  const getWeight = () => {
    fetch('weight/all', { method: 'GET' })
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

  function renderMainRoutes() {
    return (
      <Switch>
        <Route exact path="/">
          <WeightForm totalWeight={totalWeight} updateWeight={onUpdateWeight} />
        </Route>
        <Route path="/history" component={WeightData} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Typography component="div">
          <Layout photo={photo}>{renderMainRoutes()}</Layout>
        </Typography>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
