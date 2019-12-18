import React, { useState } from 'react';
import Form from './Components/Form';
import './App.css';

function App() 
{
  const [teamMemberList, setTeamMemberList] = useState([
    {
      id: 0,
      name: '',
      email: '',
      role: ''
    }
  ]);
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
