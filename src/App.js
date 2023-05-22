import './App.css';
//import Banner from './componenet/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Order from './componenet/Order'
import Gridlay from './componenet/BOMDetails';
import React, { useState } from 'react';
import Popup from './componenet/popup';

//import {ReactDOM} from 'react';

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(false);
  };

  return (
     <div><center>
      <h1 className="m-4 custom-heading neon-effect">ACE ELECTRICALS</h1></center>
      {showPopup && (
        <Popup
          onSubmit={handleSubmit}
        />
      )}

      {!showPopup && (
        <div>
          <div>
      <div class="page-container">
          <Gridlay />
      </div>
    </div>
        </div>
      )}
    </div>
  );
}

export default App;
