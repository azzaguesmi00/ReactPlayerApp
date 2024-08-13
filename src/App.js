import logo from './logo.svg';

import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
<h1 className="text-center mt-4" style={{color:"red", textDecoration: "underline"}}>Player List</h1>
      <PlayersList/>
    </div>
  );
}

export default App