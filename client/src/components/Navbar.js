import React, { Component } from 'react';
import { Button, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

const { Item } = Menu;

class Navbar extends Component {
  state = {
    currentTab: window.location.pathname === '/home' ? 'home' : 'gallery'
  };

  handleTabClick = e => {
    this.setState({ currentTab: e.key });
  }

  render() {
    const styles = {
      navbar: {
        position: 'sticky',
        top: 0,
        zIndex: 9999
      }
    };

    if (this.props.auth.userData) {
      return (
        <ErrorBoundary>
          <Menu
            onClick={this.handleTabClick}
            selectedKeys={[this.state.currentTab]}
            mode='horizontal'
            theme='dark'
            className='navbar'
            style={styles.navbar}
            >
              <Item key='home'>
                <Link to='/home'><Icon type='home' /> Home</Link>
              </Item>
              <Item key='gallery'>
                <Link to='/gallery'><Icon type='picture' /> Gallery</Link>
              </Item>
              <Item key='3' style={{ float: 'right' }} className='signout'>
                <Button type='danger' ghost>
                <a href='/api/signout'>
                  <Icon type='logout' /> Sign Out
                </a>
              </Button>
            </Item>
          </Menu>
        </ErrorBoundary>
      );
    }

    return null;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps, null)(Navbar);
