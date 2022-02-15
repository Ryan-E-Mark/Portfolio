import React from 'react';
import myPic from '../imgs/me.jpg'

const About = () => {

    return (
        <section id="about" className="about-section">
            <h3>About Me</h3>
            <img src={myPic} alt="my picture" className='my-pic'/>
            <p>about me paragraph</p>
            <p></p>
        </section>
    );
}

export default About;
