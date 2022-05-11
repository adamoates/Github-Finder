import React  from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const UserComponent = ({ user: { login, avatar_url, html_url }}) => {

    return ( 
        <div className='card text-center'>
            <img 
                src={avatar_url} 
                alt=''
                className='round-img'
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>
            <div>
                <Link to={`profile/${login}`} className='btn btn-dark btn-sm my-1'>
                    more
                </Link>
            </div>
        </div>
    )
}

UserComponent.PropType = {
    user: PropTypes.object.isRequired
}

export default UserComponent;