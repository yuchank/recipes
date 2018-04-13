import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class Summary extends React.Component {
  static propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: PropTypes.string
  };

  static defaultProps = {
    ingredients: 0,
    steps: 0,
    title: '[recipe]'
  };

  render() {
    const { ingredients, steps, title } = this.props

    return (
      <div className="summary">
        <h1>{ title }</h1>
        <p>
          <span>{ ingredients } Ingredients</span> | <span>{ steps } Steps</span>
        </p>  
      </div>  
    );
  }
}

// ReactDOM.render(<Summary title="Peanut Butter and Jelly" ingredients="peanut butter, jelly, bread" steps="spread peanut butter and jelly between bread" />, document.getElementById('root'));
ReactDOM.render(<Summary />, document.getElementById('root'));