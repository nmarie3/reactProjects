import React from 'react';
import { UserContext } from '../contexts/UseContext';
import { useContext } from 'react';

const Dashboard = () => {
    const user = useContext(UserContext); //grabs the "value" from UserContext.Provide in app.js


  return (
    <div>
      <h2>Dashboard</h2>
      <p>Hi, {user}!</p>
    </div>
  )
}

export default Dashboard
