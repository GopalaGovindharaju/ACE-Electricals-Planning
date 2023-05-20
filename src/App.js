import './App.css';
import Banner from './componenet/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import popcomplete from './componenet/Order.js'
import Order from './componenet/Order'
function App() {
  return (
    <div className="App">
      <Banner/>
      <Order/>
    </div>
  );
}

export default App;
