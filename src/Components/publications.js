import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './title';
import './_publication.scss';


import data from './publication-data';


const Publications = () => {
  

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
    <section id="publications">
      
      <Container>
        
        <div className="publication-wrapper">
          <Title title="Publications" />
          {data.publications.map((publication) => {
            

            return (
              <div>
              <div className="row" key={publication.id}>
              <div className="col-sm-9" lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="publication-wrapper__image">
                      <a
                        href={publication.url}
                        target="_blank"
                        aria-label="Publication Link"
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
                          <img  className="pro" alt="css" src={publication.img} style={{ "width":"300px", "height":"300px"}}/>
                          
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
                    <div className="publication-wrapper__text">
                      <h3 className="publication-wrapper__text-title">{publication.title}</h3>
                      <div>
                        <p>
                          {publication.info}
                          <br/>
                          <br/>
                          <a style={{color:"blue",fontWeight:"bold"}} href={publication.url}>{publication.paper}</a>
                        </p>
                        <p className="mb-4">{publication.info2}</p>
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

export default Publications;
