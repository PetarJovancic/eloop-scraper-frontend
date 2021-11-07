import React from 'react';

const Inputs = ({
	usernameValue,
	passwordValue,
	profileValue,
	handleClick,
}) => {
	return (
		<div className="input-box">
			<h3 className="stalkerID">Stalker's ID:</h3>
			<label form="text">(don't worry it remains private)</label>
			<form>
				<input
					type="username"
					placeholder="Username.."
					onChange={usernameValue}
				/>
			</form>
			<form>
				<input
					type="password"
					placeholder="Password.."
					onChange={passwordValue}
				/>
			</form>

			<h3 className="victimID">Victim's ID:</h3>
			<input type="username" placeholder="Username.." onChange={profileValue} />
			<button className="btn" onClick={handleClick}>
				STALK
			</button>
		</div>
	);
};

export default Inputs;
