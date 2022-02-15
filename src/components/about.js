import React from 'react';
import myPic from '../imgs/me.jpg'

const About = () => {

    return (
        <section id="about" className="about-section">
            <h3 className='underline'>About Me</h3>
            <div className="about-div">
                <img src={myPic} alt="me" className='my-pic'/>
                <div className="my-text">
                    <p>A Full-Stack Web-Developer and graduate of Bloom Institute of Technology. I began my development journey as self taught through <a href="https://www.freecodecamp.org/">freecodecamp</a> but ultimately decided to go the bootcamp route. </p>
                </div>
            </div>
            <p></p>
        </section>
    );
}

export default About;
