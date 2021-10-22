import React from 'react';

const ID = ({
	items,
	submitButton,
	username,
	password,
	profile,
	userChange,
	passChange,
	profileChange,
}) => {
	return (
		<>
			{' '}
			<div className="wrapper">
				{/* <div>
					<h3 className="stalkerID">Stalker's ID:</h3>
					<label form="text">(don't worry it remains private)</label>
				</div> */}
				<ul className="info">
					<li>
						<strong>Full Name:</strong> {items.full_name}
					</li>
					<li>
						<strong>ID:</strong> {items.identifier}
					</li>
					<li>
						<strong>Followers:</strong>
						{items.followed_by_count}
					</li>
					<li>
						<strong>Following:</strong> {items.follows_count}
					</li>
					<li>
						<strong>Posts:</strong>
						{items.media_count}
					</li>
					<li>
						<strong>Profile Pic:</strong>
						<a href={items.profile_pic_url_hd}>link</a>
					</li>
				</ul>
				{/* <section className="profile">
					<img src={items.profile_pic_url_hd}></img>
				</section> */}
				{/* <form>
					<div className="form-control">
						<input
							type="username"
							placeholder="Username.."
							value={username}
							onChange={userChange}
						/>
					</div>
				</form> */}
				{/* <form>
					<div className="form-control">
						<input
							type="password"
							placeholder="Password.."
							value={password}
							onChange={passChange}
						/>
					</div>
				</form> */}
				{/* <h3 className="victimID">Victim's ID:</h3>
				<form>
					<div className="form-control">
						<input
							type="profile"
							placeholder="Username.."
							value={profile}
							onChange={profileChange}
						/>
					</div>
					<button className="btn" onClick={submitButton}>
						STALK
					</button> */}
				{/* </form> */}
			</div>
		</>
	);
};

export default ID;
