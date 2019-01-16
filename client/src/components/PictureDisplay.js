import React, { Component } from 'react';
import SelectButton from './SelectButton';
import { connect } from 'react-redux';
import { fetchUnsplashPhoto } from '../actions';

class PictureDisplay extends Component {
  componentDidMount() {
    this.props.fetchUnsplashPhoto();
  }

  // componentDidUpdate() {
  //   this.props.fetchUnsplashPhoto();
  // }

  render() {
    console.log(this.props.photo);
    const styles = {
      frame: {
        border: '2px solid #ffffff',
        height: '30em',
        width: '25em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonGroup: {
        marginTop: '2em'
      }
    }

    return (
      <div>
        <div style={styles.frame}>
          <h1>Picture</h1>
        </div>
        <div style={styles.buttonGroup}>
          <SelectButton title='Yee' type='primary' size='large' />
          <SelectButton title='Nee' type='danger' size='large' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ photo }) => {
  return { photo }
};

export default connect(mapStateToProps, { fetchUnsplashPhoto })(PictureDisplay);
