import React, { Component } from 'react';
import CategoryButton from '../components/CategoryButton';

class Gallery extends Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }
    };

    return (
      <div style={styles.container} className='gallery'>
        <CategoryButton category='Animals' />
        <CategoryButton category='Architecture' />
        <CategoryButton category='Fashion' />
        <CategoryButton category='Food & Drink' />
        <CategoryButton category='Nature' />
        <CategoryButton category='Travel' />
      </div>
    )
  }
}

export default Gallery;
