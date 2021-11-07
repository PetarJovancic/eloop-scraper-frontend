import React, { useState } from 'react';
import Header from './components/ui/Header';
import ID from './components/ui/ID';
import Inputs from './components/ui/Inputs';
import axios from 'axios';
import './App.css';

const App = () => {
	const [items, setItems] = useState([]);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [profile, setProfile] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	const handleClick = async e => {
		e.preventDefault();
		const data = { username: username, password: password, profile: profile };
		const result = await axios.post('/profile', {
			body: data,
		});
		setItems(result.data);
	};

	function usernameValue(e) {
		setUsername(e.target.value);
	}

	function passwordValue(e) {
		setPassword(e.target.value);
	}

	function profileValue(e) {
		setProfile(e.target.value);
	}

	return (
		<div className="container">
			<Header />
			<ID
				items={items}
				username={username}
				password={password}
				profile={profile}
				togglePopup={togglePopup}
				isOpen={isOpen}
			/>
			<Inputs
				usernameValue={usernameValue}
				passwordValue={passwordValue}
				handleClick={handleClick}
				profileValue={profileValue}
			/>
		</div>
	);
};

export default App;
