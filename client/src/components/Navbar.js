import React, { Component } from 'react';
import { Button, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const { Item } = Menu;

class Navbar extends Component {
  state = {
    currentTab: window.location.pathname === '/home' ? '1' : '2'
  };

  handleTabClick = e => {
    this.setState({ currentTab: e.key });
  }

  render() {
    if (this.props.auth.userData) {
      return (
        <Menu
          onClick={this.handleTabClick}
          selectedKeys={[this.state.currentTab]}
          mode='horizontal'
          theme='dark'
          className='navbar'
        >
          <Item key='1'>
            <Link to='/home'><Icon type='home' /> Home</Link>
          </Item>
          <Item key='2'>
            <Link to='/gallery'><Icon type='picture' /> Gallery</Link>
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
