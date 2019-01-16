import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLikedPhotos } from '../actions';
import Spinner from '../components/Spinner';
import Picture from '../components/Picture';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchLikedPhotos();
  }

  renderLikedPhotos() {
    const { isFetching, data } = this.props.likedPhotos;
    if (isFetching) {
      return <Spinner />;
    }

    if (data.length === 0) {
      return <h1>You don't have any liked photos</h1>;
    }

    return data.map((photo, i) => {
      return (
        <div
          style={{ margin: '1em 0 1em 0' }}
          key={i}
        >
          <Picture
            src={photo.url}
            alt={photo.id}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      );
    });
  }

  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    };

    return (
      <div style={styles.container} className='gallery'>
        {this.renderLikedPhotos()}
      </div>
    );
  }
}

const mapStateToProps = ({ likedPhotos }) => {
  return { likedPhotos }
};

export default connect(mapStateToProps, { fetchLikedPhotos })(Gallery);
