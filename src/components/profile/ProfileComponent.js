import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../utilies/Spinner'
import { Link } from 'react-router-dom';
import RepoLists from '../Repos/RepoLists';

export class ProfileComponent extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getRepos: PropTypes.func.isRequired
    }

    render() {
        const {
            name,
            email,
            avatar_url,
            location,
            bio,
            blog,
            html_url,
            followers,
            following,
            public_gists,
            public_repos,
            hireable,
        } = this.props.user;

        const repos = this.props.repos;

        const { loading } = this.props;

        if(loading) {
            return (
                <Spinner />
            )
        } else {
            return (
                <Fragment>
                <Link to='/' className='btn btn-light'>
                    Back To Search
                </Link>
                Hireable: { ' ' }
                {hireable ? (
                    <i className='fas fa-check text-success' />
                    ) : (
                    <i className='fas fa-check text-danger' />
                    )
                }
                <div className='card grid-2'>
                    <div className='all-center'>
                        <img 
                            src={avatar_url} 
                            alt=''
                            className='round-img'
                            style={{ width: '150px' }}
                        />
                    </div>
                    <div>
                    {
                        name && 
                            <Fragment>
                                <p>Name: {name}</p>
                            </Fragment>
                        }
                        {
                        email && 
                            <Fragment>
                                <p>Email: {email}</p>
                            </Fragment>
                        } 
                        {
                        location && 
                            <Fragment>
                                <p>Location: {location}</p>
                            </Fragment>
                        }
                        {
                        bio && 
                             <Fragment>
                                 <p>Bio: {bio}</p>
                             </Fragment>
                        }
                        {
                        blog && 
                             <Fragment>
                                 <p>Blog: {blog}</p>
                             </Fragment>
                        }
                        {
                        html_url && 
                            <a href={html_url} className='btn btn-dark my-1'>
                                Visit Github Profile
                            </a>
                        }
                    </div>
                </div>
                <div className='card text-center'>
                    <div className='badge badge-dark'>
                        {public_repos && 
                            <Fragment>
                                <p>Repos: {public_repos}</p>
                            </Fragment>
                        }
                    </div>
                    <div className='badge badge-success'>
                        {public_gists && 
                            <Fragment>
                                <p>Gists: {public_gists}</p>
                            </Fragment>
                        }
                    </div>
                    <div className='badge badge-primary'>
                        {public_gists && 
                            <Fragment>
                                <p>Followers: {followers}</p>
                            </Fragment>
                        }
                    </div>
                    <div className='badge badge-light'>
                        {following && 
                            <Fragment>
                                <p>following: {following}</p>
                            </Fragment>
                        }
                    </div>
                    <div>
                    <RepoLists repos={repos}/>
                    </div>
                </div>
                </Fragment>
            )
        }
    }
}

export default ProfileComponent;