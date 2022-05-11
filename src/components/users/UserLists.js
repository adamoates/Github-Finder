import React from 'react';
import { PropTypes } from 'prop-types';
import UserComponent from './UserComponent';
import Spinner from '../utilies/Spinner';

export const UserLists = ({ users, loading }) => {
    
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserComponent key={user.id} user={user} />
                ))}
            </div>
        );
    }
}
   
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
}

UserLists.PropType = {
    users: PropTypes.object.isRequired
}

export default UserLists;