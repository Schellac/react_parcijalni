import React from 'react';
import PropTypes from 'prop-types';
import './UserDetails.css';

class UserDetails extends React.Component {
	static propTypes = {
		user: PropTypes.object,
		repositories: PropTypes.array,
		onReset: PropTypes.func.isRequired,
	};

	render() {
		const { user, repositories } = this.props;

		return (
			<div className='user-details'>
				{user && (
					<div className='user-info'>
						<img
							className='user-avatar'
							src={user.avatar_url}
							alt='Profilna slika'
						/>
						<div>
							<h2>{user.name}</h2>
							<p>Lokacija: {user.location}</p>
							<p>Detalji: {user.bio}</p>
						</div>
					</div>
				)}

				{repositories.length > 0 && (
					<div>
						<h3>Repozitoriji:</h3>
						<ul className='repository-list'>
							{repositories.map((repo) => (
								<li key={repo.id}>{repo.name}</li>
							))}
						</ul>
					</div>
				)}

				<button className='reset-button' onClick={this.props.onReset}>
					Reset
				</button>
			</div>
		);
	}
}

export default UserDetails;
