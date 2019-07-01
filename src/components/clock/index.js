import React from 'react';
import './index.css';

export default class Clock extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.message = 'Hello Word';
  };

  componentDidMount () {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  };

  componentWillUnmount () {
    clearInterval(this.timerId)
  };

  tick () {
    this.setState({
      date: new Date()
    });
  };

  render () {
    return (
     <div>
        <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
        <p>{ this.message }</p>
     </div>
    )
  }
}