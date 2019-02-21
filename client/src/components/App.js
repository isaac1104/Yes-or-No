import React, { Component, Suspense, Fragment, lazy } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from '../actions';
import requireAuth from './utils/requireAuth';
import Spinner from './Spinner';
import Navbar from './Navbar';

const Landing = lazy(() => import('../pages/Landing'));
const Home = lazy(() => import('../pages/Home'));
const Gallery = lazy(() => import('../pages/Gallery'));
const PictureDisplay = lazy(() => import('./PictureDisplay'));

class App extends Component {
  componentDidMount() {
    this.props.authUser();
  }

  render() {
    console.log(window);
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route
                exact
                path='/'
                render={() => {
                  const { userData } = this.props.auth;
                  if (userData) {
                    return <Redirect to='/home' />;
                  } else {
                    return <Landing />;
                  }
                }}
              />
              <Route exact path='/home' component={requireAuth(Home)} />
              <Route exact path='/gallery/:category' component={requireAuth(PictureDisplay)} />
              <Route exact path='/gallery' component={requireAuth(Gallery)} />
            </Switch>
          </Suspense>
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps, { authUser })(App);
