import { BrowserRouter, Routes as DomRoutes, Route } from 'react-router-dom';
import App from '../App';
import { LandingPage } from '../pages/LandingPage';
import { Auth } from '../pages/Auth';
import { Login } from '../pages/Auth/Login';
import { Signup } from '../pages/Auth/Signup';

export function Routes() {
	return (
		<BrowserRouter>
			<DomRoutes>
				<Route path="/" exact element={<LandingPage />} />
				<Route path="/auth" exact element={<Auth />}>
					<Route path="login" exact element={<Login />} />
					<Route path="signup" exact element={<Signup />} />
				</Route>
				{/* <Route index element={<Home />} />
					<Route path="teams" element={<Teams />}>
						<Route path=":teamId" element={<Team />} />
						<Route path="new" element={<NewTeamForm />} />
						<Route index element={<LeagueStandings />} />
					</Route> */}
			</DomRoutes>
		</BrowserRouter>
	);
}
