import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Cat } from './Cat';
import { useCount } from './useCount';


function App() {

  const [countData, addOne, substractOne, resetToZero] = useCount();

  return (
    <div className="App">
      <button onClick={addOne}>Add</button>
      <button onClick={substractOne}>Substract</button>
      <button onClick={resetToZero}>Reset to 0</button>
      <p>{countData}</p>
    </div>
  );
}

export default App;