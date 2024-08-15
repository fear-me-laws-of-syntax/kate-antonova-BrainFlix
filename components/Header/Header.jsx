import React from 'react';
import "./Header.scss";
import Logo from '../Logo/Logo';

function Header (){
    return (
        <nav className="header">
<Logo />
<h1>Stripes of Yellow</h1>
        </nav>
    
    );
}

export default Header;