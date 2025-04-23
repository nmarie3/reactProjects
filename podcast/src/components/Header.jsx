import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const Header = ({loggedIn, setLoggedIn}) => {
    const [user, setUser] = useContext(UserContext);

    const handleLogOut = () => {
        setLoggedIn(false);
        setUser({});
      }

  return (
    <div>
      <div className="signIn">
      <h2>Podcast App</h2>
      {loggedIn ? (
        <>
        <button onClick={handleLogOut}>Log Out</button>
        <h3>Hi, {user.given_name}</h3> 
        </>
      ) : (
        <>
        <div id="SignIn"></div>
        </>
        )}
    </div>
    </div>
  )
}

export default Header
