import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';

const CategoryButton = ({ category, history }) => (
  <Button
    onClick={() => history.push(`/gallery/${category}`)}
    style={{ margin: '0.5em' }}
    size='large'
    type='primary'
  >
    {category}
  </Button>
);

export default withRouter(CategoryButton);
