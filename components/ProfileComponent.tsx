import React, { useState } from 'react';

type ProfileComponentProps = {
}

const ProfileComponent = (props: ProfileComponentProps): JSX.Element => {
	const [showProfileDropdown, setShowProfileDropDown] = useState(false);

	console.log('did this load');
	

	const setProfileDropDown = () => {
		console.log("clicked!!");
		
		setShowProfileDropDown(!showProfileDropdown)
	}

	return (
		<div onClick={setProfileDropDown} className="relative ml-4 flex-shrink-0">
			<div>
				<button type="button" className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
					<span className="sr-only">Open user menu</span>
					<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
				</button>
			</div>
			{ showProfileDropdown && <div className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
				<a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>

				<a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>

				<a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
			</div> }
		</div>
	);
};

export default ProfileComponent;
