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
         <div className="lawda">
            <h2>About Me</h2>

            <p>I am a Senior Undergraduate student at National Institute of Technology Karnataka.
                <br/>
                Major in Information Technology.
                <br/>
                <br/>
                I like travelling 🏖️ and street food 🍜.
                 </p>
            <div className="dada">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Mail me here:</span><br />
						   
						   
                     <a style={{color:"red"}} href={"mailto: jaidev.chittoria02@gmail.com"}>jaidev.chittoria02@gmail.com</a>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://drive.google.com/file/d/12oClVU_btKwW5PAXDPYHr7K2OB8w2GY5/view?usp=sharing" className="button"><FontAwesomeIcon icon={faDownload} /> View Resume</a>
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