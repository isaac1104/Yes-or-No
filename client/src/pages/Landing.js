import React from 'react';
import { Icon } from 'antd';
import GoogleButton from '../components/GoogleButton';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    textAlign: 'center'
  }
};

const Landing = () => (
  <div style={styles.container} className='landing'>
    <div>
      <h1 style={{ marginBottom: '1em' }} >
        <Icon type='heart' theme='filled' className='landing-heart-icon' /> or <Icon type='close' className='landing-close-icon' />
      </h1>
      <GoogleButton />
    </div>
  </div>
);

export default Landing;
