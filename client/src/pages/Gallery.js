import React, { Component } from 'react';
import CategoryButton from '../components/CategoryButton';

class Gallery extends Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      text: {
        textAlign: 'center',
        margin: '3em 0 3em 0'
      }
    };

    return (
      <div className='gallery'>
        <h3 style={styles.text}>Choose a Category</h3>
        <div style={styles.container}>
          <CategoryButton category='Animals' />
          <CategoryButton category='Architecture' />
          <CategoryButton category='Art & Culture' />
          <CategoryButton category='Business & Work' />
          <CategoryButton category='Current Events' />
          <CategoryButton category='Experimental' />
          <CategoryButton category='Fashion' />
          <CategoryButton category='Food & Drink' />
          <CategoryButton category='Health' />
          <CategoryButton category='Nature' />
          <CategoryButton category='People' />
          <CategoryButton category='Spirituality' />
          <CategoryButton category='Textures & Patterns' />
          <CategoryButton category='Travel' />
          <CategoryButton category='Wallpaper' />
        </div>
      </div>
    )
  }
}

export default Gallery;
