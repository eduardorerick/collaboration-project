import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const userData = useMemo(() => JSON.parse(localStorage.getItem('user')), []);
	const [ user, setUser ] = useState(userData);

	useEffect(
		() => {
			if (userData) {
				setUser(userData);
			}
		},
		[ userData ]
	);

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
	return useContext(AuthContext);
}
