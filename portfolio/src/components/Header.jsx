// Header.js
import React from 'react';


const Header = () => {
  return (
    <header>
      <div className="container mx-auto p-4 flex items-center">
        <img
          src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Reemplaza con la URL de tu imagen
          alt="Tu Nombre"
          className="rounded-full h-16 w-16 mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">Waldir Merjildo Ubaldo</h1>
          <p className="text-gray-600">Desarrollador Full Stack</p>
        </div>
        {/* Agrega más contenido del encabezado según sea necesario */}
      </div>
    </header>
  );
};

export default Header;
