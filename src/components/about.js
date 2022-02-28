import React from 'react';
import myPic from '../imgs/me.jpg';
import reactPic from '../imgs/atomic-energy.png';
import javaPic from '../imgs/js.png';
import reduxPic from '../imgs/Redux.png';
import nodePic from '../imgs/nodejs.jpg';
import postPic from '../imgs/postgresql.png';

const About = () => {

    return (
        <section id="about" className="about-section" title="about-section">
            <h3 className='underline'>About Me</h3>
            <div className="about-div">
                <img src={myPic} alt="me" className='my-pic'/>
                <div className="my-text">
                    <p>I began my development journey as self taught through <a href="https://www.freecodecamp.org/" className='text-link' target="_blank" rel="noreferrer">freeCodeCamp</a> but ultimately decided to attend <a href="https://www.bloomtech.com/" className='text-link' target="_blank" rel="noreferrer">Bloom Institute of Technology</a> in August of 2021. Through their six month Web-Development program I learned to create Full-Stack applications, collaborate on team projects using Git and agile practices, and deploying applications to the cloud for use by all.</p>
                    <br/>
                    <p>I was born and raised in a small town in Alaska and love to spend time outdoors. For me, nature has always been a source of inspiration as well as a way to recalibrate and humble myself.</p>
                </div>
            </div>
            <h3 className='underline'>What I Use</h3>
            <div className="tech-div">
                <div className="tech-stack">
                    <div className="t-d">
                        <img src={javaPic} alt="JavaScript logo"/>
                        <p>JavaScript</p>  
                    </div>
                    <div className="t-d">
                        <img src={reactPic} alt="ReactJS logo"/>
                        <p>ReactJS</p>  
                    </div>
                    <div className="t-d">
                        <img src={reduxPic} alt="Redux logo"/>
                        <p>Redux</p>  
                    </div>
                    <div className="t-d">
                        <img src={nodePic} alt="Node.js logo"/>
                        <p>Node.js</p>  
                    </div>
                    <div className="t-d">
                        <img src={postPic} alt="PostgreSQL logo"/>
                        <p>PostgreSQL</p>  
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
