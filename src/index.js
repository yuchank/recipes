import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

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