import React from 'react';
import { Button, Icon } from 'antd';

const SelectButton = props => {
  return (
    <Button
      type={props.type}
      size='large'
      style={{ width: '50%' }}
      onClick={props.onClick}
    >
      <Icon type={props.icon} theme={props.theme} />
    </Button>
  )
};

export default SelectButton;
