import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Page2">Page 2</Link>
        </li>
        <li>
          <Link to="/Page3">Page 3</Link>
        </li>
        <li>
          <Link smooth to="/Page2#about">Ancla</Link> {/* Esto es un ancla de Ppage 2*/}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
