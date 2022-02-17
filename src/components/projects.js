import React from 'react';
import waterPic from '../imgs/Water-project.png';
import cocktailPic from '../imgs/cocktail.png';
import placeholder from '../imgs/placeholder.png';

const Projects = () => {
    return (
        <section className='projects-section'>
            <h3 className='underline'>Projects</h3>
            <div className='projects'>
                <div className="project-div">
                    <a href="https://water-my-plants-lambda-7.netlify.app/" target="_blank" rel="noreferrer"><img src={waterPic} alt="project thumbnail"></img></a>
                </div>
                <div className="project-div">
                    <a href="https://drink-generator-random.vercel.app/" target="_blank" rel="noreferrer"><img src={cocktailPic} alt="project thumbnail"></img></a>
                </div>
                <div className="project-div">
                    <img src={placeholder} alt="project thumbnail"></img>
                </div>
            </div>
        </section>
    );
}

export default Projects;
