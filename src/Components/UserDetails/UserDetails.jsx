import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user;
    return (
        <div>
            <h2>Details about user</h2>
            <h3>{name}</h3>
            <p>Email : {website}</p>
        </div>
    );
};

export default UserDetails;