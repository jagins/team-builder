import React, { useState } from 'react';

function Form() {
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChange = event => {

    }

    const submitForm = event => {

    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input id='name'
                type='text'
                onChange={handleChange}
                value={teamMember.name} />
            <label htmlFor='email'>email</label>
            <input id='email'
                type='email'
                onChange={handleChange}
                value={teamMember.name} />
            <label htmlFor='role'>Role</label>
            <input id='role'
                type='text'
                onChange={handleChange}
                value={teamMember.name} />
            <button type='submit'>Add Team Member</button>
        </form>
    );
}

export default Form;