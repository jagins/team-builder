import React from 'react';

function TeamMembers(props) {
    return (
        <div className='team-list'>
            {props.teamMembers.map(tm => (
                <div className='team-member' key={tm.id}>
                    <h2>{tm.name}</h2>
                    <p>{tm.email}</p>
                    <p>{tm.role}</p>
                </div>))}
        </div >
    );
}

export default TeamMembers;