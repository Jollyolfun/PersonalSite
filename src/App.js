import React, { useState, useEffect, useRef } from 'react';
import linkedInLogo from './images/lill.png';
import githubLogo from './images/githublogo.png';
import './App.css';

function MySite() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const aboutMeRef = useRef(null); 
  const socialMediaRef = useRef(null); 

  //Used to decide where to scroll to when a specific option
  //on the top of the webpage is clicked
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  //Determines which button was clicked and where to scroll based on that
  const clickedOption = (type) => {
    console.log(type);
    if (type === 'About Me' && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' }); 
    }
    if (type === 'Social Media' && socialMediaRef.current) {
      socialMediaRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  //Used to open a specific webpage when one of the social media icons are clicked
  const openWebpage = (website) => {
    if (website === 'linkedin') {
      window.open('https://www.linkedin.com/in/cole-perry-1712aa180/', '_blank', 'noopener,noreferrer');
    }

    if (website === 'github') {
      window.open('https://github.com/Jollyolfun', '_blank', 'noopener,noreferrer');
    }

  }

  return (
    <div className="root"> 
      <div className="top">
        {/* Top content */}
      </div>
      <div className="introduction">
        <div className="hello"
        style={{
          opacity: 1 - scrollPosition / 200,
          transition: 'opacity 0.5s ease-out',
        }}
        >
          Hello! I'm
        </div>
        <div 
          className="myNameIs"
          style={{ 
            opacity: 1 - scrollPosition / 200,
            transition: 'opacity 0.5s ease-out',
          }}
        > 
          Cole Perry
        </div>
      </div>
      <div className="optionsMenu"
      style={{
        opacity: 1- scrollPosition / 200,
        transition: 'opacity 0.5s ease-out',

      }}>
          What would you like to see?
      </div>
      <div className="line-with-dots"></div>
      <div className="optionsContainer">
        <div className="option" onClick={() => clickedOption('About Me')}> Who I Am</div>
        <div className="option" onClick={() => clickedOption('Social Media')}> My Social Media</div>
        <div className="option" onClick={() => clickedOption('Projects')}> Self Directed Projects</div>
        <div className="option" onClick={() => clickedOption('Skills/Servies')}> Skills/Services</div>
        <div className="option" onClick={() => clickedOption('Resume')}> Resumes</div>
        <div className="option" onClick={() => clickedOption('Contact Me')}> How To Contact Me</div>
      </div>
      <div className="line-with-dots"></div>
      <div className="gap"></div>
      
      {/* THIS IS THE ABOUT ME SECTION */}
      <div className="aboutMeContainer" ref={aboutMeRef}> 
        <div className="myImage"></div>
        <div className="descriptionContainer">

          <div className="topicHeader"> Who am I? </div>  
          <div className="description"> 
            <p>Hello there! I'm Cole Perry, a driven problem solver who just happens to be
            interested in software and computers. I'm currently studying at the University of Arizona.</p>
          
            <p>I've known I was interested in computers as soon as I downloaded my first Minecraft mod in elementary school.
              Back then, I thought nothing was cooler than being able to take a game that I loved, and change it in any
              way that I wanted to, and it helped when my brothers would look at the changes I made and say 
              "Wait, how did you do that?!". Eventually, that love of changing something evolved into a love of <i>creating</i> things, 
              specifically relating to software.
            </p>
          
          </div>

        </div>

      </div>
      
      <div className="gapSmall"></div>
      <div class="dottedLine"></div>
      <div className="gapSmall"></div>

      <div className="aboutMeContainer2"> 
        <div className="descriptionContainer2">

          <div className="description2"> 
            <p>When I'm not programming or 12 hours deep in a sleepless homework session, I'm typically
              reading some Brandon Sanderson novel, playing games, running, or making food to try and 
              impress my girlfriend. 
            </p>
            <p> I have to put emphasis on the programming and homework sessions though. That aspect 
              currently makes up 90% of my life!
            </p>
          

          
          </div>
          <div className="myImage2"></div>


        </div>

      </div>
      {/* THIS IS THE END OF THE ABOUT ME SECTION */}


      <div className="gap">
        <div className="line-with-dots"></div>
      </div>

      {/* THIS IS THE SOCIAL MEDIA SECTION */}
      <div className="socialMediaContainer" ref={socialMediaRef}>
        <div className="topicHeader"> Social Media </div> 
        <div className="socialMediaSelection">
          {/* This is where the social media buttons are */}
          
          <div className="socialMediaOptionGithub" onClick={() => openWebpage('github')}> 
            GitHub
            <img src={githubLogo} alt="GitHub"/>
          </div>

          <div className="socialMediaOption" onClick={() => openWebpage('linkedin')}> 
            LinkedIn 
            <img src={linkedInLogo} alt="LinkedIn" />
          </div>

        </div>


      </div>
      {/* THIS IS THE END OF THE SOCIAL MEDIA SECTION */}

      <div className="gap">
        <div className="line-with-dots"></div>
      </div>

    </div>

  );
}

export default MySite;
