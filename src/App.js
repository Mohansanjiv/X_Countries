
import './App.css';
import Countries from './componenets/Countries';
import { API_ENDPOINT } from './config/Config'

function App() {
  return (
    <div className="App">
      <Countries API_ENDPOINT={API_ENDPOINT} />
    </div>
  );
}

export default App;
