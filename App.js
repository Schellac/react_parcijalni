import React from 'react';
import UserForm from './UserForm';
import UserDetails from './UserDetails';
import './App.css';
import './UserDetails.css';
import './UserForm.css';

class App extends React.Component {
	state = {
		user: null,
		repositories: [],
		showForm: true,
	};

	handleFormSubmit = (username) => {
		this.fetchUser(username);
		this.fetchRepositories(username);
		this.setState({ showForm: false });
	};

	fetchUser = (username) => {
		fetch(`https://api.github.com/users/${username}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ user: data });
			})
			.catch((error) => {
				console.error('Error fetching user:', error);
			});
	};

	fetchRepositories = (username) => {
		fetch(`https://api.github.com/users/${username}/repos`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ repositories: data });
			})
			.catch((error) => {
				console.error('Error fetching repositories:', error);
			});
	};

	handleReset = () => {
		this.setState({ user: null, repositories: [], showForm: true });
	};

	render() {
		return (
			<div className='container'>
				<h1>GitHub Korisnik</h1>
				{this.state.showForm ? (
					<UserForm onSubmit={this.handleFormSubmit} />
				) : (
					<UserDetails
						user={this.state.user}
						repositories={this.state.repositories}
						onReset={this.handleReset}
					/>
				)}
			</div>
		);
	}
}

export default App;
