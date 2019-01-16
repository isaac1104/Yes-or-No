import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLikedPhotos } from '../actions';
import { Button } from 'antd';
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
          />
          <Button ghost type='danger'>X</Button>
        </div>
      )
    });
  }

  render() {
    return (
      <div className='gallery'>
        {this.renderLikedPhotos()}
      </div>
    );
  }
}

const mapStateToProps = ({ likedPhotos }) => {
  return { likedPhotos }
};

export default connect(mapStateToProps, { fetchLikedPhotos })(Gallery);
