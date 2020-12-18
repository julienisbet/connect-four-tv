import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            New Game
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
