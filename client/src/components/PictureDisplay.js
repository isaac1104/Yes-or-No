import React, { Component, Fragment } from 'react';
import SelectButton from './SelectButton';
import Spinner from './Spinner';
import Picture from './Picture';
import { connect } from 'react-redux';
import { fetchUnsplashPhoto, saveUnsplashPhoto } from '../actions';

class PictureDisplay extends Component {
  componentDidMount() {
    this.props.fetchUnsplashPhoto();
  }

  renderPhoto() {
    const { isFetching, data: { urls, description } } = this.props.photo;
    const styles = {
      frame: {
        height: '25em',
        width: '25em',
        margin: 'auto'
      },
      buttonGroup: {
        marginTop: '5em'
      }
    };

    if (isFetching) {
      return <Spinner />;
    }

    if (urls) {
      return (
        <div>
          <div style={styles.frame}>
            <Picture
              src={urls.small}
              alt={description}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div style={styles.buttonGroup}>
            <SelectButton
              title='Yes'
              type='primary'
              size='large'
              onClick={() => this.props.saveUnsplashPhoto({ url: urls.small }, this.props.fetchUnsplashPhoto)}
            />
            <SelectButton title='No' type='danger' size='large' onClick={this.props.fetchUnsplashPhoto} />
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

export default connect(mapStateToProps, { fetchUnsplashPhoto, saveUnsplashPhoto })(PictureDisplay);
