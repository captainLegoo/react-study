import './App.css';

function App() {

  return (
  <div className="App"> 
    <User name="Kyle" age={21} email="admin@admin.com"/>
    <User name="admin" age={31} email="admin@admin.com"/>
    <User name="Jack" age={12} email="admin@admin.com"/>
    <Job salary={10000} position="Developer" company="Facebook"/>
    <Job salary={20000} position="Developer" company="Google"/>
    <Job salary={30000} position="Developer" company="Amazon"/>
  </div>
  );
}

const getName = () => {
  return "Kyle";
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
}

export default App;
