import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import { authUser } from '../actions';

class Home extends Component {
  componentDidMount() {
    this.props.authUser();
  }

  render() {
    const { userData } = this.props.auth;
    console.log(userData);
    return (
      <div>
        <h1><Avatar src={userData.avatar} size='large' /> Welcome, {userData.firstName}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps, { authUser })(Home);
