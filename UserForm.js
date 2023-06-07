import React from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';

class UserForm extends React.Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	state = {
		username: '',
	};

	handleChange = (event) => {
		this.setState({ username: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.username);
	};

	render() {
		return (
			<div className='user-form'>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						value={this.state.username}
						onChange={this.handleChange}
						placeholder='Unesite korisničko ime GitHub-a'
						className='input'
					/>
					<button type='submit' className='button'>
						Pretraži
					</button>
				</form>
			</div>
		);
	}
}

export default UserForm;
