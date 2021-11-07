import React from 'react';
import Popup from './Popup';

const ID = ({ items, togglePopup, isOpen }) => {
	return (
		<>
			{' '}
			<div className="wrapper">
				<ul className="info">
					<li>
						<strong>Full Name: </strong> {items.full_name}
					</li>
					<li>
						<strong>ID: </strong> {items.identifier}
					</li>
					<li>
						<strong>Followers: </strong>
						{items.followed_by_count}
					</li>
					<li>
						<strong>Following: </strong> {items.follows_count}
					</li>
					<li>
						<strong>Posts: </strong>
						{items.media_count}
					</li>
					<li>
						<a href={items.profile_pic_url_hd}>
							<strong>Profile Picture</strong>
						</a>
					</li>
					<li>
						<button
							type="submit"
							className="additional-info"
							onClick={togglePopup}
						>
							<strong>Additional Info</strong>
						</button>

						{isOpen && (
							<Popup
								content={
									<>
										<li>
											<strong>Biography: </strong>
											{items.biography}
										</li>
										<li>
											<strong>Private Profile: </strong>
											{items.is_private}
										</li>
										<li>
											<strong>Verified Profile: </strong>
											{items.is_verified}
										</li>
										<li>
											<strong>Business Profile: </strong>
											{items.is_business_account}
										</li>
										<li>
											<strong>Business Email: </strong>
											{items.business_email}
										</li>
										<li>
											<strong>Business Phone: </strong>
											{items.business_phone_number}
										</li>
										<li>
											<strong>Facebook Profile: </strong>
											{items.connected_fb_page}
										</li>
									</>
								}
								handleClose={togglePopup}
							/>
						)}
					</li>
				</ul>
			</div>
		</>
	);
};

export default ID;
