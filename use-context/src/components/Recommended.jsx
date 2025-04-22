import React from 'react';
import { UserContext } from '../contexts/UseContext';
import { useContext } from 'react';

const Recommended = () => {
    const user = useContext(UserContext);

  return (
    <div>
      <h2>{user}'s Recommmended</h2>
    </div>
  )
}

export default Recommended
