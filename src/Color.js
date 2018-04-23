import React from 'react';
import PropTypes from 'prop-types';

import StarRating from './StarRating';
import './stylesheets/Color.scss';

const Color = ({ title, color, rating = 0 }) =>
  <section className="color">
    <h1>{ title }</h1>
    <div className="color" style={{ backgroundColor: color }}></div>
    <div>
      <StarRating starsSelected={ rating } />
    </div>
  </section>;

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default Color;