import React from 'react';
import PropTypes from 'prop-types';

import StarRating from './StarRating';
import './stylesheets/Color.scss';

export default class CColor extends React.Component {
  componentWillMount() {
    this.style = { backgroundColor: '#CCC' };
  }

  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;
    return rating !== nextProps.rating; // true update, false skip
  }

  componentWillUpdate(nextProps) {
    const { title, rating } = this.props;
    this.style = null;
    this.refs.title.style.backgroundColor = 'red';
    this.refs.title.style.color = 'white';
    alert(`${ title }: rating ${ rating } -> ${ nextProps.rating }`);
  }

  componentDidUpdate(prevProps) {
    const { title, rating } = this.props;
    const status = (rating > prevProps.rating) ? 'better' : 'worse';
    console.log(`${ title } is getting ${ status }`);
    this.refs.title.style.backgroundColor = '';
    this.refs.title.style.color = 'black';
  }

  render() {
    const { title, color, rating, onRemove, onRate } = this.props;
    return (
      <section className='color' style={ this.style }>
        <h1 ref='title'>{ title }</h1>
        <button onClick={ onRemove }>X</button>
        <div className='color' style={{ backgroundColor: color }}></div>
        <div>
          <StarRating starsSelected={ rating } onRate={ onRate } />
        </div>
      </section>
    );
  }
}

CColor.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,  
  onRate: PropTypes.func
};

CColor.defaultProps = {
  title: undefined,
  color: '#000000',
  rating: 0,
  onRemove: f => f,  
  onRate: f => f
};