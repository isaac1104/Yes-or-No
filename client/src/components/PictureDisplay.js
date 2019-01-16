import React, { Component } from 'react';
import SelectButton from './SelectButton';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import { fetchUnsplashPhoto } from '../actions';

class PictureDisplay extends Component {
  componentDidMount() {
    this.props.fetchUnsplashPhoto();
  }

  renderPhoto() {
    const { isFetching, data } = this.props.photo;
    if (isFetching) {
      return <Spinner />;
    }

    if (data.urls) {
      return (
        <img
          className='photo'
          src={data.urls.small}
          alt={data.description}
          style={{ width: '25em', height: '30em' }}
        />
      );
    }

    return null;
  }

  render() {
    const styles = {
      frame: {
        height: '30em',
        width: '25em',
        margin: 'auto'
      },
      buttonGroup: {
        marginTop: '2em'
      }
    }

    return (
      <div>
        <div style={styles.frame}>
          {this.renderPhoto()}
        </div>
        <div style={styles.buttonGroup}>
          <SelectButton title='Yee' type='primary' size='large' />
          <SelectButton title='Nee' type='danger' size='large' onClick={this.props.fetchUnsplashPhoto} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ photo }) => {
  return { photo }
};

export default connect(mapStateToProps, { fetchUnsplashPhoto })(PictureDisplay);
