import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import requireAuth from './utils/requireAuth';
import Landing from '../pages/Landing';
import Home from '../pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={requireAuth(Home)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
