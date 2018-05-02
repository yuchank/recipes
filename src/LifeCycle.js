import React from 'react';

export default class LifeCycle extends React.Component {
  
  // Mounting lifecycle: 1. constructor
  constructor() {
    super();
    this.state = {
      error: null
    }
  }

  // 2. 
  componentWillMount() {
  }

  // 3.
  render() {
    const { error } = this.state;
    return(
      <div className="className">
        { error ? <p>Error: {error.message} </p> : "" }        
      </div>
    );
  }
  
  // 4.
  componentDidMount() {
    // DOM available
  }
  
  // 5.
  componentWillUnmount() {
  }

  // Updating lifecycle: 1.
  componentWillReceiveProps() {
    // call setState()    
  }

  // 2.
  shouldComponentUpdate() {
  }

  // 3.
  componentWillUpdate() {
  }

  // 4. render()

  // 5.
  componentDidUpdate() {
    // DOM available
  }

}