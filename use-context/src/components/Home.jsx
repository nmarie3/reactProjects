import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UseContext';
import '../App.css';

const Home = () => {
    const [user, setUser] = useContext(UserContext);


  return (
    <div className="navBar">
      <h2>{user}'s Home</h2>
      <button type="button" onClick={()=>setUser("Coolio")}>Edit Name</button>
      <Link to="/dashboard">Your Dashboard</Link>
      <Link to="/recommended">Your Recommended</Link>
      <Link to="/podcasts">Your Podcasts</Link>
    </div>
  )
}

export default Home
