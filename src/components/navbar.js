import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <section id="nav">
      <div className="name-nav">
        <Link onClick={scrollToTop} spy={true} smooth={true} duration={700}>
          RM
        </Link>
      </div>
      <ul className="link-nav">
        <Link
          className="nav-a"
          to="about-section"
          spy={true}
          smooth={true}
          duration={700}
        >
          About
        </Link>
        <Link
          activeClass="active"
          className="nav-a"
          to="projects-section"
          spy={true}
          smooth={true}
          duration={700}
        >
          Projects
        </Link>
        <Link
          className="nav-a"
          onClick={scrollToBottom}
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          Contact
        </Link>
      </ul>
    </section>
  );
};

export default NavBar;
