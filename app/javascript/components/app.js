import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from './theme';

import Layout from './layout';
import EditPassword from './editPassword';
import ResetPassword from './resetPassword';
import SignIn from './signIn';
import WeightForm from './weightForm';
import WeightData from './weightData';

const App = ({ userId }) => {
  const [photo, updatePhoto] = useState(null);

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
        <Route path="/users/sign_in" component={SignIn} />
        <Route path="/users/password/new" component={ResetPassword} />
        <Route path="/users/password/edit" component={EditPassword} />
        {userId ? (
          <Route exact path="/" component={WeightForm} />
        ) : (
          <Redirect to="/users/sign_in" />
        )}
        {userId ? (
          <Route path="/history" component={WeightData} />
        ) : (
          <Redirect to="/users/sign_in" />
        )}
        <Route render={() => <h1 style={{ marginTop: 94 }}>Page not found</h1>} />
      </Switch>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Typography component="div">
          <Layout photo={photo} userId={userId}>
            {renderMainRoutes()}
          </Layout>
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
