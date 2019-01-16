import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLikedPhotos } from '../actions';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchLikedPhotos();
  }

  render() {
    console.log(this.props.likedPhotos);
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
