import githubLogo from './assets/github.png';
import linkedinLogo from './assets/ln.png';
import instagramLogo from './assets/insta.png';
import deviantartLogo from './assets/da.png';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [heading, setHeading] = useState('Engineer');

  useEffect(() => {
    const headings = ['Web Designer', 'Tech Enthusiast', 'Web Developer', 'Aspiring Engineer', 'UI/UX Designer', 'Graphic Designer', 'Passionate Learner'];
    let i = 0;
    
    const changeHeading = () => {
      setHeading(headings[i]);
      i = i < headings.length - 1 ? i + 1 : 0;
    };

    const intervalId = setInterval(changeHeading, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="hero">
        <div className="intro">
          <h1>Arunya Goojar</h1>
          <h4>{heading}</h4>
          <p>
            Designing inclusive, accessible <br></br>web experiences for all.
            </p>
        </div>
        <div className="menu">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="social">
          <a
            href="https://github.com/arunyagoojar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="g" src={githubLogo} alt="github Link" />
          </a>
          <a
            href="https://www.linkedin.com/in/arunyagoojar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="l" src={linkedinLogo} alt="Linkedin Link" />
          </a>
          <a
            href="https://www.instagram.com/arunya_goojar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="i" src={instagramLogo} alt="Instagram Link" />
          </a>
          <a
            href="https://www.deviantart.com/arunyagoojar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d" src={deviantartLogo} alt="DeviantArt Link" />
          </a>
        </div>

        <div className="resume-link">
          <a target='_blank' href="https://drive.google.com/file/d/1h_K45H2_TerPFP898-kRw0T4crp3V0ts/view?usp=share_link">My Resume</a>
          </div>
      </div>
    </>
  );
}

export default Hero;
