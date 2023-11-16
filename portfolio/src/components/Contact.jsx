// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="my-8">
    <h2 className="text-2xl font-bold">Contacto</h2>
    <p>Email: tu@email.com</p>
    <p>LinkedIn: linkedin.com/in/tu-perfil</p>
    <div className="my-4">
      <h3 className="text-xl font-semibold mb-2">Desarrollador Full Stack</h3>
      <p>
        Con más de X años de experiencia, he trabajado en proyectos desafiantes y he demostrado habilidades sólidas en el desarrollo full stack.
        Mis conocimientos abarcan desde el frontend utilizando tecnologías como React, hasta el backend con Node.js y bases de datos como MongoDB.
      </p>
      <p>
        Además de la programación, me apasiona aprender y mantenerme al tanto de las últimas tendencias tecnológicas.
      </p>
    </div>
    <div className="my-4">
      <h3 className="text-xl font-semibold mb-2">Cómo Puedo Ayudar</h3>
      <p>
        Estoy disponible para nuevas oportunidades y colaboraciones. Si tienes un proyecto interesante o necesitas asistencia en el desarrollo,
        no dudes en contactarme. Estoy abierto a discutir cómo puedo aportar al éxito de tu proyecto.
      </p>
      {/* Agrega más información sobre cómo los clientes pueden contactarte y qué tipo de colaboraciones estás buscando */}
    </div>
    {/* Agrega más detalles de contacto y cualquier otra información relevante */}
  </section>
  );
};

export default Contact;
