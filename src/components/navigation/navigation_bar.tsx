import React from 'react';
import { Link } from 'react-router-dom';
import useDevice from '../../utils/hooks/useDevice';

export default function NavigationBar() {
  const { device } = useDevice();
  return (
    <nav className={`navbar ${device}`}>
        <Link className='link' to="weather-app/">Homepage</Link>
        <Link className='link' to="weather-app/favorites">Favorites</Link>
    </nav>
  )
}
