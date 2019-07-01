import React, { Suspense, lazy  } from 'react';
import logo from './logo.svg';
import './index.css';

import Welcome from '../../components/mock/index';

const FromCom  = lazy(() => import('../../components/form/index'));

function App() {
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

            left={
              <i>123</i>
            }
            right={
              <i>456</i>
            }
          </FromCom>
        </Suspense>

        <a href="#/home" className="turnToOthers">跳转Home页面</a>
        
      </header>
    </div>
  );
}

export default App;
