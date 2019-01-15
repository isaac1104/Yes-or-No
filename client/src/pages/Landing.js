import React from 'react';
import { Avatar } from 'antd';
import GoogleButton from '../components/GoogleButton';
import yeeLogo from '../assets/yee.png';

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
      <Avatar src={yeeLogo} size='large' shape='square' />
      <h1>Yee or Nee</h1>
      <GoogleButton />
    </div>
  </div>
);

export default Landing;
