import React from 'react';
import linkedIn from '../imgs/linkedin-logo.png';
import gitHub from '../imgs/github.png';
import email from '../imgs/email.png';

const Footer = () => {
    return (
        <section id="contact" className='footer' title='contact-section'>

                <div className='footer-div'>
                    <a href="https://www.linkedin.com/in/ryan-e-mark/" target="_blank" rel="noreferrer" title="linkedin link" className='footer-a'><img src={linkedIn} alt='link to my linkedin' className='footer-link'/></a>
                    <a href="https://github.com/Ryan-E-Mark" target="_blank" rel="noreferrer" title="github link" className='footer-a'><img src={gitHub} alt='link to my github' className='footer-link'/></a>
                    <a href="mailto:rymark907@gmail.com" target="_blank" rel="noreferrer" title="email link" className='footer-a'><img src={email} alt='link to my email' className='footer-link'/></a>
                </div>

        </section>
    );
}

export default Footer;