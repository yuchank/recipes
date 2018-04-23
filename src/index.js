import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.scss';

import { Component } from 'react';

class Summary extends React.Component {
  static propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: (props, propName) => (typeof props[propName] !== 'string') ? new Error('A title must be a string') : (props[propName].length > 20) ? new Error('title is over 20 characters') : null
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

ReactDOM.render(<Summary title="Peanut Butter and Jelly" ingredients="peanut butter, jelly, bread" steps="spread peanut butter and jelly between bread" />, document.getElementById('root'));

class AddColorForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  static propTypes = {
    onNewColor: PropTypes.func
  };

  static defaultProps = {
    onNewColor: f => f
  };

  submit(e) {
    const { _title, _color } = this.refs;
    e.preventDefault();
    this.props.onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  }

  render() {
    return (
      <form onSubmit={ this.submit }>
        <input ref='_title' type='text' placeholder='color title...' required />
        <input ref='_color' type='color' required />
        <button>ADD</button>
      </form>  
    );
  }
}

const logColor = (title, color) => {
  console.log(`TODO: add ${ title } and ${ color } to the list`);
  console.log(`TODO: render UI with new Color`);
};

ReactDOM.render(<AddColorForm onNewColor={ logColor }/>, document.getElementById('color-organizer'));

const Star = ({ selected = false, onClick = f => f }) => 
  <div className={ selected ? 'star selected' : 'star' } onClick={ onClick }></div>

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

// ReactDOM.render(<Star selected={ true } onClick={ () => console.log('Star Click') } />, document.getElementById('star'));

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: props.starsSelected || 0
    };
    this.change = this.change.bind(this);
  }

  static PropTypes = {
    totalStars: PropTypes.number
  };

  static defaultProps = {
    totalStars: 5
  };

  change(starsSelected) {
    this.setState({ starsSelected });
    // after every setState call, the render function is called, updating the state with the new UI.
  }

  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;

    return (
      <div className='star-rating'>
        {[...Array(totalStars)].map((n, i) => <Star key={ i } selected={ i < starsSelected } onClick={ () => this.change(i + 1) } />)}
        <p>{ starsSelected } of { totalStars }</p>
      </div>
    );
  }
}

ReactDOM.render(<StarRating />, document.getElementById('star'));

const StarRatingPresentational = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => 
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) => <Star key={ i } selected={ i < starsSelected } onClick={ () => onRate(i + 1) } />)}
    <p>{ starsSelected } of { totalStars } stars</p>
  </div>;

StarRatingPresentational.propTypes = {
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func
};

const ColorList = ({ colors = [] }) =>
  <div className="color-list">
    {(colors.length === 0) ? <p>No Colors Listed. (Add a Color)</p> : colors.map(color => <Color key={ color.id } {...color} />)}
  </div>;

ColorList.propTypes = {
  colors: PropTypes.array
};

const Color = ({ title, color, rating = 0 }) =>
  <section className="color">
    <h1>{ title }</h1>
    <div className="color" style={{ backgroundColor: color }}></div>
    <div>
      <StarRatingPresentational starsSelected={ rating } />
    </div>
  </section>;

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          'id': '0175d1f0-a8c6-41bf-8d02-df5734d829a4',
          'title': 'ocean at dusk',
          'color': '#00c4e2',
          'rating': 5
        },
        {
          'id': '83c7ba2f-7392-4d7d-9e23-35adbe186046',
          'title': 'lawn',
          'color': '#26ac56',
          'rating': 3
        },
        {
          'id': 'a11e3995-b0bd-4d58-8c48-5e49ae7f7f23',
          'title': 'bright red',
          'color': '#ff0000',
          'rating': 0
        }
      ]
    }
  }

  render() {
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm />
        <ColorList colors={ colors } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));