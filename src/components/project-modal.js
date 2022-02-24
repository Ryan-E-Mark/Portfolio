import React, { useRef } from 'react';

const ProjectModal = (props) => {

    const modalRef = useRef();

    const {showModal, setShowModal, projects, projectId } = props;

    const [ currentProject ]  = projects.filter(project => project.id === projectId);

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    return (
        <>
            {showModal ? (
                <div className='background-div' ref={modalRef} onClick={closeModal}>
                    <div className='modal-container'>
                        <div className='button-cont'>
                            <button className='modal-button' onClick={() => setShowModal(!showModal)}>X</button>
                        </div>
                        <img src={currentProject.img} alt="current project" className='modal-pic'></img>
                        <h3 className='modal-title'>{currentProject.title}</h3>
                        <p className='modal-description'>{currentProject.description}</p>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default ProjectModal;
