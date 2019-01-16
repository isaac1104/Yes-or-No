import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authUser } from '../actions';
import PictureDisplay from '../components/PictureDisplay';

class Home extends Component {
  componentDidMount() {
    this.props.authUser();
  }

  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }
    };

    return (
      <div style={styles.container} className='home'>
        <PictureDisplay />
      </div>
    )
  }
}

export default connect(null, { authUser })(Home);
