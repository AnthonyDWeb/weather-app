import React from 'react';
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <nav className="navbar">
        <Link className='link' to="/">Homepage</Link>
        <Link className='link' to="/favorites">Favorites</Link>
    </nav>
  )
}
