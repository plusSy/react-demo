import React from 'react';

import './index.css';

import Clock from '../../components/clock/index';
import Toggle from '../../components/toggle/index';
import Loop from '../../components/loop/index';
import ThemeButton from '../../components/button/index';

export default class Home extends React.Component{
  constructor (props) {
    super(props);
  };
  componentDidMount () {
    console.log('参数传递:', this.props.match.params);
  };
  render () {
    return (
      <div className="homeCon">
        <h1>Home 页面</h1>
        <a href="#/" className="turnToOthers">跳转首页</a>

        <Clock />

        <Toggle name="first one"/>

        <Loop val={['1', '2', '3', '4']} />

        <button onClick={() => this.props.history.push('/')}>跳转首页</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => this.props.history.push('/refs')}>跳转Refs</button>

        <hr/>
        
        <ThemeButton text="submit" theme="light"/>
        
      </div>
    )
  };
}