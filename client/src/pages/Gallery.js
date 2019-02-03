import React, { Component } from 'react';
import CategoryButton from '../components/CategoryButton';

class Gallery extends Component {
  renderCategories() {
    const categories = [
      'Animals',
      'Architecture',
      'Art & Culture',
      'Business & Work',
      'Current Event',
      'Experimental',
      'Fashion',
      'Food & Drink',
      'Health',
      'Nature',
      'People',
      'Spirituality',
      'Textures & Patterns',
      'Travel',
      'Wallpaper'
    ];

    return categories.map(category => {
      return <CategoryButton category={category} key={category} />;
    });
  }

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
          {this.renderCategories()}
        </div>
      </div>
    )
  }
}

export default Gallery;
