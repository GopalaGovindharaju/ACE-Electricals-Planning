import './App.css';
import Banner from './componenet/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import popcomplete from './componenet/Order.js'
import Order from './componenet/Order'
import Gridlay from './componenet/BOMDetails';
import {ReactDOM} from 'react';

function App() {
  return (
    <div>
      <br></br>
      <br></br>
      <center>
        <h1 className="custom-heading neon-effect">ACE ELECTRICALS</h1>
      </center>
      <br></br>
      
      <div className="App">
      <Banner/>
      <Order/>

      <div class="page-container">
          <Gridlay />
      </div>
      </div>
    </div>
    
  );
}

export default App;
