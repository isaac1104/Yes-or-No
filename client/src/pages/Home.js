import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import { authUser } from '../actions';
import PictureDisplay from '../components/PictureDisplay';

class Home extends Component {
  componentDidMount() {
    this.props.authUser();
  }

  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }
    };

    const { userData } = this.props.auth;
    return (
      <div style={styles.container} className='home'>
        <PictureDisplay />
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps, { authUser })(Home);
