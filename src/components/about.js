import React from 'react';
import myPic from '../imgs/me.jpg'

const About = () => {

    return (
        <section id="about" className="about-section">
            <h3 className='underline'>About Me</h3>
            <div className="about-div">
                <img src={myPic} alt="me" className='my-pic'/>
                <div className="my-text">
                    <p>I began my development journey as self taught through <a href="https://www.freecodecamp.org/" className='text-link' target="_blank" rel="noreferrer">freeCodeCamp</a> but ultimately decided to attend <a href="https://www.bloomtech.com/" className='text-link' target="_blank" rel="noreferrer">Bloom Institute of Technology</a> in August of 2021. Through their six month Web-Development program I both learned a lot and found I have a lot to learn.</p>
                    <br/>
                    <p>I was born and raised in a small town in Alaska and love to spend time outdoors. For me, nature has always been a source of inspiration as well as a way to recalibrate and humble myself. I try to balance my seemingly ever increasing time in front of a screen with time spent where cell signal is sparce.</p>
                </div>
            </div>
            <p className='underline'>What I use:</p>
            <div className="tech-stack">
                <p>JavaScript</p>
                <p>React.js</p>
                <p>Redux</p>
                <p>Node.js</p>
                <p>Express</p>
                <p>PostgreSQL</p>
            </div>
        </section>
    );
}

export default About;
