import React, { Component } from 'react';
import profilepic from './img/pp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
  render() {

    
    return (

        <section id="abd">
           
           
                      

      <div id="about">
      
          
      <div className="row">
      
      
         <div className="bc">
            <img className="profile-pic"  src={profilepic} alt="JD Profile Pic" />
         </div>
         <div className="intro">
            <h2>About Me</h2>

            <p>Hi there, I am a software engineer at <a style={{color:"green"}} href={"https://www.ncr.com"}>NCR Corporation</a>,
            <br/>
             working as a part of the R&D security team under the banking division. 
             <br/>
             My current interests lie broadly in machine learning, full-stack/backend development, and algorithms.
             <br/>
             <br/>
             I completed my B.Tech in Information Technology at
             <br/>
             the <a style={{color:"green"}} href={"https://halelabnitk.github.io/index.html"}>National Institute of Technology Karnataka</a>, India.
             <br/>
             Here, I was a part of the <a style={{color:"green"}} href={"https://halelabnitk.github.io/index.html"}>HALE Lab</a> as a Research Intern and
             <br/>
             also completed my bachelor thesis under <a style={{color:"green"}} href={"https://infotech.nitk.ac.in/faculty/sowmya-kamath-s"}>Dr. Sowmya Kamath</a>.
            
            </p>
            <div className="dada">
               <div className="columns contact-details">
                  <h2>Up for a chat?</h2>
                  <p className="address">
						   <span>Mail me here:</span><br />
						   
						   
                     <a style={{color:"red"}} href={"mailto: jaidev.chittoria02@gmail.com"}>jaidev.chittoria02@gmail.com</a>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://bit.ly/3hvFJjH" className="button"><FontAwesomeIcon icon={faDownload} /> View Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </div>
   </section>
    );
  }
}

export default About;