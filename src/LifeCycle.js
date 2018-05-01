import React from 'react';

export default class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    // DOM 
  }
  
  componentWillUnmount() {
  }

  componentWillReceiveProps() {
    // setState()    
  }

  shouldComponentUpdate() {
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
    // DOM
  }

  render() {
    const { error } = this.state;
    return(
      <div className="className">
        { error ? <p>Error: {error.message} </p> : "" }        
      </div>
    );
  }
}