import React, { useState } from 'react';
import Form from './Components/Form';
import TeamMembers from './Components/TeamMembers';
import './App.css';

function App() 
{
  //set the state of the teamMember to blank initally
  const [teamMember, setTeamMember] = useState([
    {
      id: 0,
      name: '',
      email: '',
      role: ''
    }
  ]);

  //function to create add a new teamMember to the list
  const addNewTeamMember = tm => 
  {
    const newTeamMember = 
    {
      id: Date.now(),
      name: tm.name,
      email: tm.email,
      role: tm.role
    };

    //add teamMember to the current list 
    setTeamMember([...teamMember, newTeamMember]);
  };

  //displays the form and subsquent list
  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewTeamMember={addNewTeamMember} />
      <TeamMembers teamMembers={teamMember}/>
    </div>
  );
}

export default App;
