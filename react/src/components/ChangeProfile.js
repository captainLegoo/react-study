import { useState } from "react";

export const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState('');
  return (
    <div>
      <input onChange={(event) => setNewUsername(event.target.value)}/>
      <button onClick={() => {}}> Change Username </button>
    </div>
  );
}