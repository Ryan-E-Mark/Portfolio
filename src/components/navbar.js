import React from "react";

const NavBar = () => {
    return (
        <section id="nav">
                <div className="name-nav">
                    <a href="#home" className="home-link"><h3>RM</h3></a> 
                </div>
                <div className="link-nav"> 
                    <a href="#about" className="nav-a">About</a> 
                    <a href="#work" className="nav-a">Work</a> 
                    <a href="#contact" className="nav-a">Contact</a> 
                </div>
        </section>
    )
}

export default NavBar;
