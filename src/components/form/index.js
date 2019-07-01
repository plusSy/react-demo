import React from 'react';
import './index.css'

export default class FromCom extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      fruit: 'banana',
      age: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange (event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value,
    })
  };

  handleSubmit (event) {
    // let name = this.state.name;
    console.log(`提交的信息是`, this.state);
    event.preventDefault();
  };
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="label-lt">
          名字:
          <input className="lable-gt" name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
        </label>
        <label className="label-lt">
          年龄:
          <input className="lable-gt" name="age" type="number" value={this.state.age} onChange={this.handleChange}></input>
        </label>
        <label className="label-lt">
          水果:
          <select className="lable-gt" name="fruit" value={this.state.fruit} onChange={this.handleChange}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="pear">梨</option>
          </select>
        </label>
        <label className="label-lt">
          <input type="submit" value="提交"></input>
        </label>

        {this.props.children}
      </form>
    )
  }
}