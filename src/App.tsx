import * as React from 'react';
import './assets/css/App.css';

import Clock from './components/clock';

import logo from './assets/images/logo.svg';

import typeScript from './assets/ts/typeScript'

typeScript.classFn()

function Name(props:any) {
  return <div>我的名字是：{ props.name }</div>
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Name name="张飞"></Name>
        <Clock />
      </div>
    );
  }
}

export default App;
