import React, { useState } from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import ProjectModal from './components/project-modal';
import Footer from './components/footer';
import './App.css';
import projects from './data';


function App() {
  const [showModal, setShowModal] = useState(false)
  const [projectId, setProjectId] = useState();

  return (
        <div>
          <NavBar />
          <Home />
          <hr></hr>
          <About/>
          <hr></hr>
          <ProjectModal setShowModal={setShowModal} showModal={showModal} projects={projects} projectId={projectId}/>
          <Projects setShowModal={setShowModal} showModal={showModal} projects={projects} setProjectId={setProjectId}/>
          <Footer />
        </div>
  );
}

export default App;
