
import './App.css';
import axios from 'axios';
import DisplayMixologists from './components/DisplayMixologists';

function App() {

  axios.get('http://localhost:3000/api/v1/mixologists/').then((res) => {
    console.log(res.data)
  })

  return (
    <div className="App">
      <DisplayMixologists />
    </div>
  );
}

export default App;
