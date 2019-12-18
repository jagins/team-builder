import React, { useState } from 'react';
import Form from './Components/Form';
import './App.css';

function App() 
{
  const [teamMember, setTeamMember] = useState([
    {
      id: 0,
      name: '',
      email: '',
      role: ''
    }
  ]);

  const addNewTeamMember = tm =>
  {
    const newTeamMember = {
      id: Date.now(),
      name: tm.name,
      email: tm.email,
      role: tm.role
    };

    setTeamMember([...teamMember, newTeamMember]);
  };
  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewTeamMember={addNewTeamMember}/>
    </div>
  );
}

export default App;
