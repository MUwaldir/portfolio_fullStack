// src/components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Sobre Mí</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700">
            ¡Hola! Soy [Tu Nombre], un apasionado desarrollador full stack con experiencia en la creación de aplicaciones web y móviles. Mi enfoque principal es construir productos que no solo sean funcionales sino también atractivos y fáciles de usar.
          </p>

          <p className="text-gray-700">
            Soy un apasionado desarrollador full stack con más de X años de experiencia en la creación de aplicaciones web modernas. Mi enfoque principal es proporcionar soluciones técnicas eficientes y escalables que satisfagan las necesidades del cliente.
          </p>

          <p className="text-gray-700">
            Tengo experiencia trabajando con diversas tecnologías, incluyendo React, Node.js, Express, MongoDB, y muchas más. Mi enfoque va más allá del código, ya que también valoro la colaboración efectiva y la resolución creativa de problemas.
          </p>
        </div>

        <div className="my-4">
          <h3 className="text-xl font-semibold mb-2">Experiencia y Habilidades</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Desarrollo front-end con React, Vue.js y HTML/CSS.</li>
            <li>Desarrollo back-end con Node.js, Express y bases de datos como MongoDB y PostgreSQL.</li>
            <li>Experiencia en el diseño e implementación de APIs RESTful y GraphQL.</li>
            {/* Agrega más habilidades y detalles sobre tu experiencia */}
          </ul>
        </div>

        <div className="my-4">
          <h3 className="text-xl font-semibold mb-2">Proyectos Destacados</h3>
          <p className="text-gray-700">
            A lo largo de mi carrera, he contribuido a varios proyectos destacados que demuestran mi capacidad para enfrentar desafíos complejos. Uno de los proyectos notables es [Nombre del Proyecto], donde lideré el desarrollo del [describe tu contribución y logros].
          </p>
          {/* Agrega más proyectos y detalles sobre tu contribución */}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Tecnologías que utilizo:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Frontend: React, Angular, Vue.js</li>
            <li>Backend: Node.js, Express, Django</li>
            <li>Bases de Datos: MongoDB, MySQL, PostgreSQL</li>
            <li>Desarrollo Móvil: React Native, Flutter</li>
            <li>Gestión de Estado: Redux, MobX</li>
            <li>Estilos: CSS, Sass, Tailwind CSS</li>
            {/* Añade más tecnologías según tus habilidades */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
