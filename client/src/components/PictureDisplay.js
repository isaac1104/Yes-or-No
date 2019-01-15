import React from 'react';
import { Button } from 'antd';
import Picture from './Picture';

const PictureDisplay = () => {
  return (
    <div>
      <Picture />
      <div style={{ marginTop: '2em' }}>
        <Button type='primary' size='large' style={{ width: '50%' }}>Yee</Button>
        <Button type='danger' size='large' style={{ width: '50%' }}>Nee</Button>
      </div>
    </div>
  );
};

export default PictureDisplay;
