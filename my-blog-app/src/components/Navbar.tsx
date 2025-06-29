
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav style={{ padding: '1rem', background: '#eee' }}>
    <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navbar;
