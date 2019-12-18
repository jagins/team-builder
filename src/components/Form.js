import React, { useState } from 'react';

function Form(props) {
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChange = event => 
    {
        setTeamMember({...teamMember, [event.target.id]: event.target.value});
    }

    const submitForm = event => 
    {
        event.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({
            name: '',
            email: '',
            role: ''
        });
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input 
                id='name'
                type='text'
                onChange={handleChange}
                value={teamMember.name} />
           
            <label htmlFor='email'>email</label>
            <input 
                id='email'
                type='email'
                onChange={handleChange}
                value={teamMember.name} />
           
            <label htmlFor='role'>Role</label>
            <input 
                id='role'
                type='text'
                onChange={handleChange}
                value={teamMember.name} />
            
            <button type='submit'>Add Team Member</button>
        </form>
    );
}

export default Form;