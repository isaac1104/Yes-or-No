import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import requireAuth from './utils/requireAuth';

const Landing = lazy(() => import('../pages/Landing'));
const Home = lazy(() => import('../pages/Home'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={requireAuth(Home)} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
