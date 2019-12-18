import React, { useState } from 'react';

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

    </div>
  );
}

export default App;
