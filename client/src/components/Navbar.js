import React, { Component } from 'react';
import { Button, Menu, Icon } from 'antd';
import { connect } from 'react-redux';

const { Item } = Menu;

class Navbar extends Component {
  render() {
    if (this.props.auth.userData) {
      return (
        <Menu
          defaultSelectedKeys={[ '1' ]}
          mode='horizontal'
          theme='dark'
          className='navbar'
        >
          <Item key='1'>
            <Icon type='home' /> Home
          </Item>
          <Item key='2'>
            <Icon type='picture' /> Gallery
          </Item>
          <Item key='3' style={{ float: 'right' }} className='signout'>
            <Button type='danger' ghost>
              <a href='/api/signout'>
              <Icon type='logout' /> Sign Out</a>
            </Button>
          </Item>
        </Menu>
      );
    }

    return null;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps, null)(Navbar);
