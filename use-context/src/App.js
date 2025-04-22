//in terminal, "npm i react-router-dom" must be done first to import react Routers;
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Recommended from "./components/Recommended";
import Podcasts from "./components/Podcasts";
import { UserContext } from "./contexts/UseContext";
import Home from "./components/Home";
import { useState } from "react";
import './App.css';



function App() {
  const [user, setUser] = useState("Natasha"); {/*this would be good for if you have a login form where it'll pull the name, but since we don't it's hardcoded for now. but we can add a feature that lets the user change their name on the fly as shown below in the value and into the home page*/}



  return (
    <>
    <Router>
      {/*what below means is that everywhere we want to show the user's name, we need to wrap tour routes in the UserContext*/}
      <UserContext.Provider value={[user, setUser]}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/recommended" element={<Recommended/>}/>
        <Route path="/podcasts" element={<Podcasts/>}/>
      </Routes>
      </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;
