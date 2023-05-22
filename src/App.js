import React from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Gridlay from './componenet/BOMDetails';
import './App.css'

function App() {
  return (
    <div>
      <br></br>
      <br></br>

      <center>
        <h1 className="custom-heading neon-effect">ACE ELECTRICALS</h1>
      </center>
        <br></br>
        
        <div class="page-container">
          <Gridlay />
        </div>

    </div>   
  );
}

export default App;
