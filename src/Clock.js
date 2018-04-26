import React from 'react';

import { getClockTime, oneSecond } from './lib';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = getClockTime();
  }

  componentWillMount() {
  }

  componentDidMount() {
    console.log('starting clock');
    this.ticking = setInterval(() => this.setState(getClockTime()), oneSecond());
  }
  
  componentWillUnmount() {
    clearInterval(this.ticking);
    console.log('stopping clock');
  }

  componentWillUpdate() {
  }

  render() {
    const { hours, minutes, seconds, ampm } = this.state;
    return(
      <div className="clock">
        <span>{ hours }</span>
        <span>:</span>
        <span>{ minutes }</span>
        <span>:</span>
        <span>{ seconds }</span>
        <span>{ ampm }</span>
        <button onClick={ this.props.onClose }>x</button>
      </div>
    );
  }
}