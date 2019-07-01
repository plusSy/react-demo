import React from 'react';
import './index.css';

import Welcome from '../mock/index'

export default class Toggle extends React.Component{
  constructor (props) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {
      isToggleOn : false
    };
  };

  componentDidMount () {
    console.log('name', this.props.name)
  };

  handleClick = (params) => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
    console.log('params', params);
  };

  handleLoginClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
    console.log('login in', this)
  };

  render () {
    return (
      <div>
        <div className="toggle-class" onClick={this.handleClick.bind(this, 'params')}>{ this.state.isToggleOn ? 'on' : 'off' }</div>

        { true &&  <Welcome onClick={this.handleLoginClick}/> }
      </div>
    )
  }
}