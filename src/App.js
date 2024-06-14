import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Navbar';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState('Work');

  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;