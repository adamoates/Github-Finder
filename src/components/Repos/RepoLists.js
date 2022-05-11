import React from 'react';
import { PropTypes } from 'prop-types';
import RepoComponent from './RepoComponent';
import Spinner from '../utilies/Spinner';

export const RepoLists = ({ loading, repos }) => {
    
    if(loading) {
        return <Spinner />
    } else {
        return repos.map(repo => (
            <RepoComponent key={repo.id} repo={repo} />
        ))}
}

RepoLists.PropType = {
    repos: PropTypes.array.isRequired
}

export default RepoLists;