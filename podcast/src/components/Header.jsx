import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const Header = ({loggedIn, setLoggedIn, signInButton}) => {
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
        <img src={user.picture} alt="user-profile"/>
        <button onClick={handleLogOut}>Log Out</button>
        <h3>Hi, {user.given_name}</h3> 
        </>
      ) : (
        <>
        <div ref={signInButton}></div>
        </>
        )}
    </div>
    </div>
  )
}

export default Header
