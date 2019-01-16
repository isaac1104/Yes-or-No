import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <h3>Error: Please refresh the page to show the navbar</h3>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
