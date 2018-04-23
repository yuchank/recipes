import React from 'react';
import PropTypes from 'prop-types';

import Star from './Star';

// class StarRating extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       starsSelected: props.starsSelected || 0
//     };
//     this.change = this.change.bind(this);
//   }

//   static PropTypes = {
//     totalStars: PropTypes.number
//   };

//   static defaultProps = {
//     totalStars: 5
//   };

//   change(starsSelected) {
//     this.setState({ starsSelected });
//     // after every setState call, the render function is called, updating the state with the new UI.
//   }

//   render() {
//     const { totalStars } = this.props;
//     const { starsSelected } = this.state;

//     return (
//       <div className='star-rating'>
//         {[...Array(totalStars)].map((n, i) => <Star key={ i } selected={ i < starsSelected } onClick={ () => this.change(i + 1) } />)}
//         <p>{ starsSelected } of { totalStars }</p>
//       </div>
//     );
//   }
// }

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => 
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) => <Star key={ i } selected={ i < starsSelected } onClick={ () => onRate(i + 1) } />)}
    <p>{ starsSelected } of { totalStars } stars</p>
  </div>;

StarRating.propTypes = {
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func
};

export default StarRating;