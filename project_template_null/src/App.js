import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'



function App() {
  return (
    <div className="App">
      <div className='button'>
          <Button variant="danger">test</Button>
      </div>
      <Header/>
    </div>
  );
}

export default App;
