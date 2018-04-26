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
  }
  
  componentWillUnmount() {
  }

  componentWillUpdate() {
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