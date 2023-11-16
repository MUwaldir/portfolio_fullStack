// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      <div>
        <Link to="/">Inicio</Link>
      </div>
      <div className='flex justify-between'>
        <Link className='px-2' to="/">Proyectos</Link>
        <Link className='px-2' to="/contact">Contacto</Link>
        <Link className='px-2' to="/about">Acerca de mí</Link>
      </div>
    </div>
  );
}

export default Navbar;

