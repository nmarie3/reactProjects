/*<<npm i jwt-decode>> is needed to decode user information from the google token like name and profile picture. then must add beelow:*/
import {jwtDecode} from "jwt-decode";

import {useEffect, useState, userContext} from 'react';
import {UserContext} from "./contexts/UserContext";
import './App.css';
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState({}); /*obj because the data inside is an obj*/
  const [loggedIn, setLoggedIn] = useState(false);

  const handleCallBack = (res) => {
    let user = jwtDecode(res.credential);
    setUser(user);
    setLoggedIn(true)
  };

  useEffect (() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "仮",
      callback: handleCallBack /*what happens when someone logs in*/
    });
    google.accounts.id.renderButton(
      document.getElementById("SignIn"),
      {theme: "outline", size:"large"}
    )
  }, [loggedIn]) /*adding loggedIn here means we need it to rerender every time our loggedIn status changes because it's in a useEffect*/


  return (
    <>
    <UserContext.Provider value={[user, setUser]}>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </UserContext.Provider>
    </>
  );
}

export default App;
