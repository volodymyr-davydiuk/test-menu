import React from 'react';
import {Home} from "./Pages";
import {Route, Routes} from "react-router";
import {LineUp} from "./Pages/LineUp";
import {Nominations} from "./Pages/Nominations";
import {About} from "./Pages/About";
import {Partners} from "./Pages/Partners";
import {Academic} from "./Pages/Academic";
import {Cantact} from "./Pages/Cantact";
import "./App.css"

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={`/`} Component={Home} key={"homepage"} />
      <Route path={`/lineup/`} Component={LineUp} key={"lineup"} />
      <Route path={`/nominations/`} Component={Nominations} key={"nominations"} />
      <Route path={`/about-us/`} Component={About} key={"about"} />
      <Route path={`/partners/`} Component={Partners} key={"partners"} />
      <Route path={`/academic/`} Component={Academic} key={"academic"} />
      <Route path={`/contact/`} Component={Cantact} key={"contact"} />
    </Routes>
  );
};

export default App;