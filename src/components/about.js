import React from 'react';


const myAbouts = [
    {
        title: "Home",
        description: "I'm from Alaska...",
        logo: "",
    },
    {
        title: "Development",
        description: "I create fast, aesthetic websites..",
        logo: "",
    },
    {
        title: "Hobbies",
        description: "I like to..",
        logo: "",
    }
]

const About = () => {

    return (
        <section className="about-section">
            {myAbouts.map( single => {
                <div>
                    <img src={single.logo} alt="about-me-"></img>
                    <h3>{single.title}</h3>
                    <p>{single.description}</p>
                </div>
            })}
        </section>
    );
}

export default About;