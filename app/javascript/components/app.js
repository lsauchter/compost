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
  const [photo, updatePhoto] = useState(null);
  console.log(userId);

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
    getBackground();
  }, []);

  function renderMainRoutes() {
    return (
      <Switch>
        <Route exact path="/">
          <Landing userId={userId} />
        </Route>
        <Route path="/users/sign_in" component={SignIn} />
        {userId ? <Route path="/app" component={WeightForm} /> : <Redirect to="/" />}
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
