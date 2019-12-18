import React, { useState } from 'react';

function Form(props) 
{
    //set the local state to blank
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    //fires when change in the text box has been detected
    const handleChange = event => 
    {
        //setting the state of the teamMember to which ever the user has typed in
        setTeamMember({...teamMember, [event.target.id]: event.target.value});
    }

    //fires when the submit button has been clicked and calls the function to add to the list
    //text fields reset back to blank
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
    //renders the form and submit button
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
                value={teamMember.email} />
           
            <label htmlFor='role'>Role</label>
            <input 
                id='role'
                type='text'
                onChange={handleChange}
                value={teamMember.role} />
            
            <button type='submit'>Add Team Member</button>
        </form>
    );
}

export default Form;