import React from  'react';

import './index.css';

export default class ThemeButton extends React.Component{
  constructor (props) {
    super(props);
  };
  handleSubmmit () {
    console.log('handleSubmmit')
  };
  render () {
    return (
      <button 
        className={'btn-' + this.props.theme}
        onClick={() => this.handleSubmmit()}
      >{this.props.text}</button>
    )
  }
}