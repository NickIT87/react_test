import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>Hello World</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

import MyComponent from './components/Greet'  // Greet.js was named as MyComponent
// Nick.js  Should named as original variable, because no have default export
import { Nick } from './components/Nick'      
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Greet from './components/less9'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MyComponent/> */}
        {/* <Nick/> */}
        {/* <Welcome/> */}
        {/* <Hello /> */}
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder woman"/>

        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder woman"/>
      </div>
    );
  }
}


export default App;
