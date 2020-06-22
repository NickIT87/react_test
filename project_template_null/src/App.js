import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <div className='button'>
          <Button variant="danger">test</Button>
      </div>
    </div>
  );
}

export default App;
