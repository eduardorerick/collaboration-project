import React from 'react';
import { Navigate } from 'react-router-dom';

export function IsLogged({ children }) {
	const userData = localStorage.getItem('user');

	return userData ? <Navigate to="/portal/profile" /> : <React.Fragment>{children}</React.Fragment>;
}
