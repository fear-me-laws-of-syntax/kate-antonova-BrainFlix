import React from 'react';
import "./Logo.scss";
// import logo from '../../src/assets/logo/BrainFlix-logo.svg';

function Logo () {
    return (
        <div className="logo"> 
            <img src='../../src/assets/logo/BrainFlix-logo.svg'
            // {logo}
            alt="BrainFlix logo" />
        
        </div>
  
  );
}

export default Logo;