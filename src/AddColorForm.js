import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/AddColorForm.scss';

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
      <form className='add-color' onSubmit={ this.submit }>
        <input ref='_title' type='text' placeholder='color title...' required />
        <input ref='_color' type='color' required />
        <button>ADD</button>
      </form>  
    );
  }
}

export default AddColorForm;