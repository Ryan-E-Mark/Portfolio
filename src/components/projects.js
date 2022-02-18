import React from 'react';
import waterPic from '../imgs/Water-project.png';
import cocktailPic from '../imgs/cocktail.png';
import placeholder from '../imgs/placeholder.png';

const Projects = () => {
    return (
        <section id="projects" className='projects-section' title="projects-section">
            <h3 className='underline'>Projects</h3>
            <div className='projects'>
                <div className="project-div">
                    <h5>Water My Plants</h5>
                    <a href="https://water-my-plants-lambda-7.netlify.app/" target="_blank" rel="noreferrer"><img src={waterPic} alt="project thumbnail"></img></a>
                    <p><span className='span'>Description: </span>A web app that allows users to create an account and track the watering schedule of their plants.</p>
                    <p><span className='span'>Role: </span>Back-End Developer</p>
                </div>
                <div className="project-div">
                    <h5>Cocktail Recipe Generator</h5>
                    <a href="https://drink-generator-random.vercel.app/" target="_blank" rel="noreferrer"><img src={cocktailPic} alt="project thumbnail"></img></a>
                    <p><span className='span'>Description: </span>Randomly generate a cocktail recipe with the click of a button!</p>
                    <p><span className='span'>Role: </span>Front-End Developer</p>
                </div>
                <div className="project-div">
                    <h5>Freebooter Website</h5>
                    <img src={placeholder} alt="project thumbnail"></img>
                    <p><span className='span'>Description: </span>The official website of Freebooter Mountain Surf.</p>
                    <p><span className='span'>Role: </span>Full-Stack Developer</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
