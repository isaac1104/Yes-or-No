import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.redirectUser();
    }

    componentDidUpdate() {
      this.redirectUser();
    }

    redirectUser() {
      const { isAuthenticating, userData } = this.props.auth;
      if (isAuthenticating === null) return;
      if (!isAuthenticating && typeof userData !== 'object') {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => {
    return { auth }
  };

  return withRouter(connect(mapStateToProps, null)(ComposedComponent));
}
