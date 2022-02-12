import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [ user, setUser ] = useState({});

	const userData = JSON.parse(localStorage.getItem('user')) || undefined;

	if (userData) {
		setUser(userData);
	}

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
	return useContext(AuthContext);
}
