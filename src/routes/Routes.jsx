import { BrowserRouter, Routes as DomRoutes, Route } from 'react-router-dom';
import App from '../App';
import { LandingPage } from '../pages/LandingPage';
import { Login } from '../pages/Login';

export function Routes() {
	return (
		<BrowserRouter>
			<DomRoutes>
				<Route path="/" exact element={<LandingPage />} />
				<Route path="/login" exact element={<Login />} />
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
