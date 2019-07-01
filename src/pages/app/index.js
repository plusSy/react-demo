import React, { Suspense, lazy  } from 'react';
import logo from './logo.svg';
import './index.css';

import Welcome from '../../components/mock/index';

const FromCom  = lazy(() => import('../../components/form/index'));

export default class App extends React.Component{
  constructor (props) {
    super(props);
  };
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Welcome name="Kobe Bryant"/>
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
  
          <Suspense fallback={<div>Loading...</div>}>
            <FromCom>
              <p>hello word</p>
            </FromCom>
          </Suspense>
  
          <button onClick={() => this.props.history.push('/home/3')}>跳转Home页面</button>
          
        </header>
      </div>
    );
  }
};
