import React from 'react';
import Home from './containers/Home';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './assets/styles/containers/App.scss';
const hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route component={Home} />
        {/* <Route component={() => <h1>Not found page 404</h1>} /> */}
      </Switch>
    </Router>
  );
};

export default App;
