import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './title';
import './_experience.scss';


import data from './experience-data';


const Experience = () => {
  

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
    <section id="experiences">
      
      <Container>
        
        <div className="experience-wrapper">
          <Title title="Experience" />
          {data.experiences.map((experience) => {
            

            return (
              <div>
              <div className="row" key={experience.id}>
              <div className="col-sm-9" lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="experience-wrapper__image">
                      <a
                        href={experience.url}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded ">
                          <img  className="pro" alt="css" src={experience.img} style={{ "width":"300px", "height":"300px"}} />
                          
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </div>
                <div className="col-sm-3" lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="experience-wrapper__text">
                      <h3 className="experience-wrapper__text-title">{experience.title}</h3>
                      <div>
                        <p>
                          {experience.info}
                        </p>
                        <p className="mb-4">{experience.info2}</p>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>

              <hr style={{width:'80%'}}/>

              </div>
              
            );
          })}
          
        </div>
      </Container>
    </section>
  );
};

export default Experience;
