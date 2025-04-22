import React from 'react';
import { UserContext } from '../contexts/UseContext';
import { useContext } from 'react';

const Podcasts = () => {
    const user = useContext(UserContext);

  return (
    <div>
      <h2>{user}'s Podcasts</h2>
    </div>
  )
}

export default Podcasts
