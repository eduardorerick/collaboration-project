import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const userData = JSON.parse(localStorage.getItem('user')) || {};
	const [ user, setUser ] = useState(userData);
	
	useEffect(() => {
		setUser(userData);
	}, []);

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
	return useContext(AuthContext);
}
