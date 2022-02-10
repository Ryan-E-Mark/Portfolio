import React, { useState } from "react";
import About from "./about";
import "../App.css";

const Home = () => {
    const [aboutMe, setAboutMe] = useState(false);

    const handleClick = () => {
        setAboutMe(!aboutMe);
    }

    console.log(aboutMe);

    return (
        <div className="home-page">
            <div className="about-container">
                <h1>Hello, I'm Ryan</h1>
                <p className="underline">Full-Stack Developer</p>
                <div className="drop-down">
                    <h3>About Me</h3>
                    { aboutMe === true ? 
                    <button className="btn collapse" onClick={handleClick}>-</button> : <button className="btn collapse" onClick={handleClick}>+</button> }
                </div>
                    { aboutMe === true ? <About /> : <div></div> }
            </div>
        </div>
    )
}

export default Home;