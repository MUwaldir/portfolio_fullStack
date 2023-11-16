import React from 'react';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetails from "./components/ProjectDetails";
import Navbar from './components/Navbar';

const projectsData = [
  {
    id: '1',
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1...',
    stack: 'React, Node.js, MongoDB',
    images: ['https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    repository: 'https://github.com/tuusuario/proyecto1',
    website: 'https://proyecto1.com',
  },
  {
    id: '2',
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2...',
    stack: 'Vue.js, Express, MySQL',
    images: ['url_imagen_2_1', 'url_imagen_2_2', 'url_imagen_2_3'],
    repository: 'https://github.com/tuusuario/proyecto2',
    website: 'https://proyecto2.com',
  },
  // Repite el patrón para otros proyectos
  // ...
];

function App() {
  return (
    <Router>
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <Navbar />
      <Header/>
      <Routes>
      <Route path="/" element={<Projects projects={projectsData} />} />
        <Route path="/projects/:projectId" element={<ProjectDetails projects={projectsData} />} />
       
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
