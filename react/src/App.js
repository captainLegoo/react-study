import './App.css';
import { Person } from './components/Person';


function App() {

  return (
    <div className="App">
      <Person 
        name={"Kyle"}
        email="kyle@me.com"
        age={24}
        isMarried={true}
        friends={['Bill', 'Jeff']}
      />
    </div>
  );
}

export default App;