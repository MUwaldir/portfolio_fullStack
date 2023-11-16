// src/components/Projects.js
import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Header';
import TechnologiesSlider from './TechnologiesSlider';
const ProjectCard = ({ title, description, stack, image,id }) => {
  return (
    <div className="border p-4 mb-4">
      <Link to={`/projects/${id}`} className="block mb-2">
        <img src={image} alt={title} className="rounded-md" />
      </Link>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-700 mb-2">Tecnologías: {stack}</p>
    </div>
  );
};

const Projects = () => {
  const frontendProjects = [
    // Lista de proyectos frontend
    { id:'1',
      title: 'Proyecto Frontend 1',
      description: 'Descripción del proyecto frontend 1...',
      stack: 'React, CSS',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    { id:'2',
      title: 'Proyecto Frontend 2',
      description: 'Descripción del proyecto frontend 2...',
      stack: 'React, CSS',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    { id:'3',
      title: 'Proyecto Frontend 1',
      description: 'Descripción del proyecto frontend 1...',
      stack: 'React, CSS',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    { id:'4',
      title: 'Proyecto Frontend 2',
      description: 'Descripción del proyecto frontend 2...',
      stack: 'React, CSS',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    // ... más proyectos frontend
  ];

  const backendProjects = [
    // Lista de proyectos backend
    { id:'5',
      title: 'Proyecto Backend 1',
      description: 'Descripción del proyecto backend 1...',
      stack: 'Node.js, Express, MongoDB',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    { id:'6',
      title: 'Proyecto Backend 2',
      description: 'Descripción del proyecto backend 2...',
      stack: 'Node.js, Express, MongoDB',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    { id:'7',
      title: 'Proyecto Backend 1',
      description: 'Descripción del proyecto backend 1...',
      stack: 'Node.js, Express, MongoDB',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    { id:'8',
      title: 'Proyecto Backend 2',
      description: 'Descripción del proyecto backend 2...',
      stack: 'Node.js, Express, MongoDB',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    // ... más proyectos backend
  ];

  const mobileProjects = [
    // Lista de proyectos para app móvil
    { id:'9',
      title: 'Proyecto Móvil 1',
      description: 'Descripción del proyecto móvil 1...',
      stack: 'React Native, Expo',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    { id:'10',
      title: 'Proyecto Móvil 2',
      description: 'Descripción del proyecto móvil 2...',
      stack: 'React Native, Expo',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    { id:'11',
      title: 'Proyecto Móvil 1',
      description: 'Descripción del proyecto móvil 1...',
      stack: 'React Native, Expo',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    { id:'12',
      title: 'Proyecto Móvil 2',
      description: 'Descripción del proyecto móvil 2...',
      stack: 'React Native, Expo',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    // ... más proyectos móviles
  ];

  
  return (
    <section className="my-8">
      
      <TechnologiesSlider/>
      <h2 className="text-2xl font-bold mb-4">Proyectos</h2>

      <div>
        <h3 className="text-xl font-bold mb-2">Frontend</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {frontendProjects.map((project, index) => (
            
            <ProjectCard key={index} {...project} />
           
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Backend</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {backendProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Aplicaciones Móviles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mobileProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

    
    </section>
  );
};

export default Projects;
