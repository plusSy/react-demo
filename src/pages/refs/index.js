import React from 'react';
import './index.css'

export default class Ref extends React.Component{
  render () {
    return (
     <div className="refs">
        <div>Hello Word</div>
        <hr />
        <button onClick={() => this.props.history.push('/')}>跳转首页</button>
     </div>
    )
  }
}