import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';

const { Header } = Layout;
const { Item } = Menu;

class Navbar extends Component {
  render() {
    if (this.props.auth.userData) {
      return (
        <Header>
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{
              lineHeight: '64px'
            }}>
            <Item key="1">nav 1</Item>
            <Item key="2">nav 2</Item>
            <Item key="3">nav 3</Item>
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
