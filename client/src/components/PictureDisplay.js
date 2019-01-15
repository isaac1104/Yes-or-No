import React from 'react';
import { Button } from 'antd';
import Picture from './Picture';
import SelectButton from './SelectButton';

const PictureDisplay = () => {
  return (
    <div>
      <Picture />
      <div style={{ marginTop: '2em' }}>
        <SelectButton title='Yee' type='primary' size='large' />
        <SelectButton title='Nee' type='danger' size='large' />
      </div>
    </div>
  );
};

export default PictureDisplay;
