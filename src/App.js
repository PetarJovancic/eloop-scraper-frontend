import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import ID from './components/ui/ID';
import axios from 'axios';
import './App.css';

const App = () => {
	const [items, setItems] = useState([]);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [profile, setProfile] = useState('');

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios.post('/profile');
			setItems(result.data);
		};
		fetchItems();
	}, []);

	const submitButton = () => {
		// fetchItems();
	};

	const userChange = e => {
		setUsername(e.target.value);
	};

	const passChange = e => {
		setPassword(e.target.value);
	};

	const profileChange = e => {
		setProfile(e.target.value);
	};
	return (
		<div className="container">
			<Header />
			<ID
				items={items}
				submitButton={submitButton}
				username={username}
				userChange={userChange}
				password={password}
				passChange={passChange}
				profile={profile}
				profileChange={profileChange}
			/>
		</div>
	);
};

export default App;
