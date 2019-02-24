import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './components/shared/Styles';
import './components/shared/SmoothScroll';

import { Home } from './pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
