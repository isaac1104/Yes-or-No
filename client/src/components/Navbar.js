import React, { Component } from 'react';
import { Button, Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';

const { Header } = Layout;
const { Item } = Menu;

class Navbar extends Component {
  render() {
    if (this.props.auth.userData) {
      return (
        <Header>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[ '1' ]}
            style={{ lineHeight: '64px' }}
            >
            <Item key='1'>Home</Item>
            <Item key='2'>Gallery</Item>
            <a href='/api/signout' style={{ float: 'right' }}>
              <Button
                type='danger'
                >
                <Icon type='logout' /> Sign Out
              </Button>
            </a>
          </Menu>
        </Header>
      );
    }

    return null;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps, null)(Navbar);
