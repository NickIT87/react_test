import React from 'react';
import './App.css';
import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa'
import { MdAlarm } from 'react-icons/md' 
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <IconContext.Provider value={{color: 'blue', size: '5rem'}}>
      <div className="App">
        <FaReact color='purple' size='10rem' />
        <MdAlarm/>
        <FaReact/>
        <div className='button'>
          <Button variant="danger">test</Button>
        </div>
        
      </div>
    </IconContext.Provider>
  );
}

export default App;
