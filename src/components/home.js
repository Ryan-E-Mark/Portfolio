import React, { useState } from "react";
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
                <p>Full-Stack Developer</p>
                <h3>About Me</h3>
                <button onClick={handleClick}>+</button>
                { aboutMe === true ? <p>About me paragraph</p> : <div></div>}
            </div>
        </div>
    )
}

export default Home;