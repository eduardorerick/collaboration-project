import { BrowserRouter, Routes as DomRoutes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Auth } from "../pages/Auth";
import { Login } from "../pages/Auth/Login";
import { Signup } from "../pages/Auth/Signup";
import { TaskList } from "../pages/Portal/TaskList";
import { Profile } from "../pages/Portal/Profile";
import { Portal } from "../pages/Portal";
import { CanSee } from "../components/CanSee";
import React from "react";
import { IsLogged } from "../components/isLogged";

export function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/" exact element={<LandingPage />} />
        <Route
          path="/auth"
          exact
          element={
            <IsLogged>
              <Auth />
            </IsLogged>
          }
        >
          <Route path="login" exact element={<Login />} />
          <Route path="signup" exact element={<Signup />} />
        </Route>
        <Route
          path="/portal"
          exact
          element={
            <CanSee>
              <Portal />
            </CanSee>
          }
        >
          <Route path="tasklist" exact element={<TaskList />} />
          <Route path="profile" exact element={<Profile />} />
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
