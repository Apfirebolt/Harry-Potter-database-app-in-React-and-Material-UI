import React from 'react';
import './headerStyles.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="container">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/spells">Spells</NavLink></li>
        <li><NavLink to="/characters">Characters</NavLink></li>
        <li><NavLink to="/houses">Houses</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header;