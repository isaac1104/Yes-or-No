import React, { Component } from 'react';
import PictureDisplay from '../components/PictureDisplay';

class Home extends Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }
    };

    return (
      <div style={styles.container} className='home'>
        <PictureDisplay />
      </div>
    )
  }
}

export default Home;
