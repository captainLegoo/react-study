import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/function';

function App() {

  const [workout, setWorkout] = useState(null);
  const [poison, setPosion] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoals] = useState('strength_power');

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }

    let newWorkout = generateWorkout({poison, muscles, goal});
    setWorkout(newWorkout);

    window.location.href='#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator
        posion={poison}
        setPosion={setPosion}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goal}
        setGoals={setGoals}
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App