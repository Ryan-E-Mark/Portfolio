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
            <div>
                <h1>Hi, I'm Ryan</h1>
                <p className="underline">Full-Stack Developer</p>
                <div>
                    { aboutMe === true ? <About /> : <div></div> }
                    { aboutMe === true ? 
                    <button className="btn exit" onClick={handleClick}>-</button> : <button className="btn" onClick={handleClick}>+</button> }
                </div>
            </div>
        </div>
    )
}

export default Home;