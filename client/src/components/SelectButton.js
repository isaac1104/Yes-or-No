import React from 'react';
import { Button } from 'antd';

const SelectButton = props => {
  return (
    <Button
      type={props.type}
      size='large'
      style={{ width: '50%' }}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  )
};

export default SelectButton;
