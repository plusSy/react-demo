import React from 'react'
import './index.css'

export default class Welcome extends React.Component{
  render () {
    return (
      <div className="wel-class" onClick={this.props.onClick}> Welcome { this.props.name } </div>
    )
  }
}