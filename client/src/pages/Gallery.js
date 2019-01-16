import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLikedPhotos } from '../actions';

class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
        <h1>Gallery</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ likedPhotos }) => {
  return { likedPhotos }
};

export default connect(mapStateToProps, { fetchLikedPhotos })(Gallery);
