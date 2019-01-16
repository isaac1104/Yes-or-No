import React, { Component, Fragment } from 'react';
import SelectButton from './SelectButton';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import { fetchUnsplashPhoto } from '../actions';

class PictureDisplay extends Component {
  componentDidMount() {
    this.props.fetchUnsplashPhoto();
  }

  renderPhoto() {
    const { isFetching, data: { urls, description } } = this.props.photo;
    const styles = {
      frame: {
        height: '30em',
        width: '25em',
        margin: 'auto'
      },
      buttonGroup: {
        marginTop: '2em'
      }
    };

    if (isFetching) {
      return <Spinner />;
    }

    if (urls) {
      return (
        <div>
          <div style={styles.frame}>
            <img
              className='photo'
              src={urls.small}
              alt={description}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div style={styles.buttonGroup}>
            <SelectButton title='Yee' type='primary' size='large' onClick={() => console.log(urls.small)} />
            <SelectButton title='Nee' type='danger' size='large' onClick={this.props.fetchUnsplashPhoto} />
          </div>
        </div>
      );
    }

    return null;
  }

  render() {
    return <Fragment>{this.renderPhoto()}</Fragment>;
  }
}

const mapStateToProps = ({ photo }) => {
  return { photo }
};

export default connect(mapStateToProps, { fetchUnsplashPhoto })(PictureDisplay);
