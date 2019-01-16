import React from 'react';

const Picture = props => {
  return (
    <img
      className='photo'
      src={props.src}
      alt={props.description}
      style={props.style}
    />
  )
};

export default Picture;
