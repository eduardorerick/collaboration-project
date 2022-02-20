import React from 'react';

export function CanSee({ children }) {
	const userData = localStorage.getItem('user');

	


	return userData ? <React.Fragment>{children}</React.Fragment> : null;
}
