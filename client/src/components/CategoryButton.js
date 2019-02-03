import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';

const CategoryButton = ({ category, history }) => <Button onClick={() => history.push(`/gallery/${category}`)}>{category}</Button>;

export default withRouter(CategoryButton);
