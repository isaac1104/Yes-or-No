import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authUser } from '../actions';

class Home extends Component {
  componentDidMount() {
    this.props.authUser();
  }

  render() {
    console.log(this.props.auth);
    return (
      <h1>Welcome</h1>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps, { authUser })(Home);
