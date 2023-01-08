import React from 'react';
import Rating from './Rating';

const Rate = ({ name, rating }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <Rating value={rating} />
    </div>
  );
};

export default Rate;