import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './title';
import './_projects.scss';


import data from './projects-data';


const Projects = () => {
  

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
    <section id="projects">
      
      <Container>
        
        <div className="project-wrapper">
          <Title title="Projects" />
          {data.projects.map((project) => {
            

            return (
              <div>
              <div className="row" key={project.id}>
                <div className="col-sm-3" lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{project.title}</h3>
                      <div>
                        <p>
                          {project.info}
                        </p>
                        <p className="mb-4">{project.info2}</p>
                      </div>
                      
                      {project.url && (
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={project.url}
                      >
                        See Live
                      </a>
                      )}
                      
                      {project.repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={project.repo}
                        >
                          Source Code
                        </a>
                      )}
                      <br/>
                    </div>
                  </Fade>
                </div>

                
                <div className="col-sm-9" lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={project.url}
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
                          <img  className="pro" alt="css" src={project.img} style={{ "width":"550px", "height":"251px"}}/>
                          
                          </div>
                        </Tilt>
                      </a>
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

export default Projects;
