import React, { Component, Fragment } from 'react';
import SelectButton from './SelectButton';
import Spinner from './Spinner';
import Picture from './Picture';
import { connect } from 'react-redux';
import { fetchUnsplashPhoto, saveUnsplashPhoto } from '../actions';

class PictureDisplay extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.fetchUnsplashPhoto(category);
  }

  renderPhoto() {
    const { isFetching, data: { urls, description } } = this.props.photo;
    const { category } = this.props.match.params;
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      },
      frame: {
        height: '25em',
        width: '25em',
        margin: 'auto'
      },
      buttonGroup: {
        marginTop: '3em'
      }
    };

    if (isFetching) {
      return <Spinner />;
    }

    if (urls) {
      return (
        <div style={styles.container}>
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
                icon='heart'
                theme='filled'
                type='primary'
                size='large'
                onClick={() => this.props.saveUnsplashPhoto({ url: urls.small }, this.props.fetchUnsplashPhoto(category))}
              />
              <SelectButton icon='close' type='danger' size='large' onClick={() => this.props.fetchUnsplashPhoto(category)} />
            </div>
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
