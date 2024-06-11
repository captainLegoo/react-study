import './App.css';
import {User} from './User';

function App() {
  // Ternary Operators
  // const age  = 11;
  // const isGreen = false;

  // return (
  // <div className="App">
  //   {age >=18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
  //   <h1 style={{color: isGreen ? "green" : "red" }}> THIS HAS COLOR </h1>

  //   {isGreen && <button>THIS IS A BUTTON</button>}
  // </div>
  // );

  const names = ["Kyle", "John", "Eric", "Sally", "Jane", "Mark"];

  const users = [
    {name: "Kyle", age: 27},
    {name: "John", age: 17},
    {name: "Eric", age: 21},
  ];

  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Saturn", isGasPlanet: true},
    {name: "Mercury", isGasPlanet: false}
  ];

  return (
    <div className="App">
      {/* {names.map((name, index) => {
        return <h1 key={index}> {name} </h1>;
      })} */}

      {/* {users.map((user, key) => {
        // return <div> {user.name} {user.age} </div>;
        return <User name={user.name} age={user.age} />;
      })} */}

      {planets.map((planet, index) => {
        return (
          <div>
            { planet.isGasPlanet && <h1>{planet.name}</h1> }
          </div>
        );
      })}
    </div>
  );
}

export default App;
