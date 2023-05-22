import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './componenet/Banner';
import Order from './componenet/Order';
import Gridlay from './componenet/BOMDetails';

function App() {
  return (
    <div className='App'>
     <Banner/>
     <Order/>
     <Gridlay/>
     </div>
  );
}
export default App;