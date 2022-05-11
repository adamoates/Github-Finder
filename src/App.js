import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from './components/utilies/Alert';
import Navbar from './components/layouts/Navbar';
import Search from './components/users/UserSearch';
import UserLists from './components/users/UserLists';
import ProfileComponent from './components/profile/ProfileComponent';
import About from './components/pages/AboutComponent';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		alert: null,
		loading: false,
		repos: [],
		users: [],
		user: {},
	}

	getUser = async (username) => {
		this.setState({ loading: true });

		const res = await axios.get(`https://api.github.com/users/${username}`);

		this.setState({ 
			user: res.data, 
			loading: false 
		});
    }

	getRepos = async (username) => {
		this.setState({ loading: true });

		const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=25&sort=created:asc`);

		this.setState({ 
			repos: res.data, 
			loading: false 
		});
    }

	searchUsers = async (text) => {
		this.setState({ loading: true });

		const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

		this.setState({ 
			users: res.data.items, 
			loading: false 
		});
    }

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	}

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => this.setState({ alert: null }), 1000);
	}

	render() {
		const {  alert, loading, repos, user, users } = this.state;

		return (
			<Router>
			<div className='App'>
				<header className='App-header'>
					<Navbar 
						icon='fab fa-github' 
						title='Github Finder' 
					/> 
				</header>
				<div className='container'>
					<Alert alert={alert} />
					<Switch>
						<Route
							exact
							path='/'
							render={props => (
								<Fragment>
									<Search 
										clearUsers={this.clearUsers} 
										searchUsers={this.searchUsers}
										showClearButton={users.length > 0 ? true : false }
										showSearchForm={users.length < 1 ? true : false } 
										setAlert={this.setAlert}
									/>
									<UserLists loading={loading} users={users} /> 
								</Fragment>
							)}
						>
						</Route>
						<Route
							exact
							path='/about'
							component={About}
						/>
						<Route
							exact
							path='/profile/:login'
							render={props => (
								<ProfileComponent 
									{...props} 
									getUser={this.getUser} 
									getRepos={this.getRepos} 
									user={user} 
									repos={repos}
									loading={loading}
								/>
							)}
						>
						</Route>
					</Switch>
				</div>
			</div>
			</Router>
		);
	}
}

App.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github'
}

export default App;