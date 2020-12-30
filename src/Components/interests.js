import React,{useEffect,useState} from "react";
import data from "./interests-data";
import Fade from 'react-reveal/Fade';
import './stars.scss';
import goku from './img/goku.png';





const Interests = () => {

    const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
      <div id="ho" style={{backgroundImage: "url(" + goku + ")"}}>
          
          <div id="stars"/>
        <div id="stars2"/>
        <div id="stars3"/>
    <div id="interests" className="int">
        

      <div className="container">
      
      <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
        <div className="interests-container">
          <h1>Interests and Hobbies</h1>
          <div className="interests-grid">
            {data.skills.map(skill => (
              <div className="interests" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
        </Fade>
      </div>
      

    </div>
    </div>
  )
}

export default Interests;
