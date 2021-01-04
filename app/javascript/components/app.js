import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from './theme';

import Landing from './landing';
import Layout from './layout';
import SignIn from './signIn';
import WeightForm from './weightForm';
import WeightData from './weightData';

const App = ({ userId }) => {
  const [weightInfo, updateWeightInfo] = useState(null);
  const [photo, updatePhoto] = useState(null);

  const getWeight = () => {
    fetch('weight/all', { method: 'GET' })
      .then((response) => response.json())
      .then((res) => {
        updateWeightInfo(res);
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
          <Landing user={userId} />
        </Route>
        <Route path="/users/sign_in" component={SignIn} />
        {userId ? (
          <Route path="/home">
            <WeightForm
              totalWeight={weightInfo?.total}
              averageWeight={weightInfo?.average}
              updateWeight={onUpdateWeight}
            />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
        {userId ? <Route path="/history" component={WeightData} /> : <Redirect exact to="/" />}
        <Route render={() => <h1 style={{ marginTop: 94 }}>Page not found</h1>} />
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

App.propTypes = {
  userId: PropTypes.number,
};

App.defaultProps = {
  userId: null,
};

export default App;
