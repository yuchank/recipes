import React from 'react';
import PropTypes from 'prop-types';

// import Color from './Color';
import CColor from './CColor';
import './stylesheets/ColorList.scss';

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) =>
  <div className="color-list">
    {/* {(colors.length === 0) ? <p>No Colors Listed. (Add a Color)</p> : colors.map(color => <Color key={ color.id } {...color} onRate={ (rating) => onRate(color.id, rating) } onRemove={ () => onRemove(color.id) }/>)} */}
    {(colors.length === 0) ? <p>No Colors Listed. (Add a Color)</p> : colors.map(color => <CColor key={ color.id } {...color} onRate={ (rating) => onRate(color.id, rating) } onRemove={ () => onRemove(color.id) }/>)}
  </div>;

ColorList.propTypes = {
  colors: PropTypes.array
};

export default ColorList;