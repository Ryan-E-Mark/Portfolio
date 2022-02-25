import React from 'react';


const Projects = (props) => {

    const { setShowModal, showModal, projects, setProjectId } = props;

    const openModal = (id) => {
        setProjectId(id);
        setShowModal(!showModal);
    }

    return (
            <section id="projects" className='projects-section' title="projects-section">
            <h3 className='underline'>Projects</h3>
            <div className='projects'>
                {projects.map(project => 
                    <div className="project-div" onClick={() => openModal(project.id)}>
                        <img src={project.img} alt="project thumbnail"></img>
                        <h5>{project.title}</h5>
                        <p><span className='span'>Description: </span>{project.description}</p>
                    </div>
                )}
            </div>
        </section>       
    );
}

export default Projects;
