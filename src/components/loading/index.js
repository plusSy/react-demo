import React from 'react';

import './index.css';

export default class Loading extends React.Component{
  render () {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
      </div>
    )
  };
}