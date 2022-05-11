import React  from 'react';
import { PropTypes } from 'prop-types';

export const RepoComponent = ({ repo }) => {

    return ( 
        <div className='container'>
          <ul className='list'>
              <li className='list li'>
                <a href={repo.html_url}>{repo.name}</a> {repo.language}
              </li>          
            </ul>
        </div>
    )
}

RepoComponent.PropType = {
    repo: PropTypes.object.isRequired
}

export default RepoComponent;