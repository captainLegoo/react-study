import './App.css';
import { Person, Country } from './components/Person';

function App() {

  const getAge = (name: string): number => {
    return 99;
  };

  return (
    <div className="App">
      <Person 
        name={"Kyle"}
        email="kyle@me.com"
        age={24}
        isMarried={true}
        friends={['Bill', 'Jeff']}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;