// src/components/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  const { title, description, stack, images, repository, website } = project;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-700 mb-2">Tecnologías: {stack}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Proyecto ${title}`} className="rounded-md mb-2" />
        ))}
      </div>

      <p className="mt-4">
        Repositorio: <a href={repository} target="_blank" rel="noopener noreferrer">{repository}</a>
      </p>
      <p>
        Sitio web: <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
      </p>
    </div>
  );
};

export default ProjectDetails;
