import React from 'react';
import { Avatar } from 'antd';
import GoogleButton from '../components/GoogleButton';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center'
  }
};

const Landing = () => (
  <div style={styles.container} className='landing'>
    <div>
      <h1>Yes or No</h1>
      <GoogleButton />
    </div>
  </div>
);

export default Landing;
