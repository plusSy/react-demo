import React from 'react';
import './index.css';

function LiComponents (props) {
  let val = props.value;
  return (
    <li>{ val }</li>
  )
};
function UlComponents (props) {
  let number = props.number
  let listItem = number.map(item => {
    return <LiComponents key={item.toString()} value={item}/>
  })
  return (
    <ul>{ listItem }</ul>
  )
};

export default class Loop extends React.Component{
  constructor (props) {
    super(props);
    this.itemlI = undefined;
  };

  componentWillMount () {
   
  };

  render () {
    return (
      <div>
        <UlComponents number={ this.props.val }/>
      </div>
    )
  }
}