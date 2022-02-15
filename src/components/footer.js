import React from 'react';
import linkedIn from '../imgs/linkedin-logo.png';
import gitHub from '../imgs/github.png';
import email from '../imgs/email.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer-div'>
                <a href="https://www.linkedin.com/in/ryan-e-mark/" title="linkedin link"><img src={linkedIn} alt='link to my linkedin'></img></a>
                <a href="https://github.com/Ryan-E-Mark" title="github link"><img src={gitHub} alt='link to my github'></img></a>
                <a href="mailto:rymark907@gmail.com" title="email link"><img src={email} alt='link to my email'></img></a>
            </div>
        </footer>
    );
}

export default Footer;