import React from 'react';
import './NavigationStats.css'
const NavigationStats = ({ onRouteChange, isSignedIn }) => {
      return (
        <div>
        <nav className = "navigationPlacement">
          <p /* onClick={() => onRouteChange('signin')} */ className='MatchDetails'>MatchDetails</p>
          <p /* onClick={() => onRouteChange('register')} */ className='TeamPlayers'>Team Players</p>
        </nav>
        </div>
      );
    }


export default NavigationStats;