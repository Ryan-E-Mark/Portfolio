import React from 'react';

const ProjectModal = (props) => {

    const {showModal, setShowModal, projects, projectId } = props;

    const [ currentProject ]  = projects.filter(project => project.id === projectId);

    return (
        <>
            {showModal ? (
                <div className='background-div'>
                    <div className='modal-container'>
                        <img src={currentProject.img} alt="current project"></img>
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.description}</p>
                        <button onClick={() => setShowModal(!showModal)}>Close</button>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default ProjectModal;
