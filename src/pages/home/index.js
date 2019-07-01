import React from 'react';

import './index.css';

import Clock from '../../components/clock/index';
import Toggle from '../../components/toggle/index';
import Loop from '../../components/loop/index';

export default class Home extends React.Component{
  render () {
    return (
      <div className="homeCon">
        <h1>Home 页面</h1>
        <a href="#/" className="turnToOthers">跳转首页</a>

        <Clock />

        <Toggle name="first one"/>

        {/* <Loop val={['1', '2', '3', '4']} /> */}
      </div>
    )
  }
}