import React, { Component } from 'react';


import t from './img/twitter1.png';
import g from './img/github.png';
import i from './img/instagram.png';
import l from './img/linkedin.png';
import k from './img/kaggle.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
  render() {

    return (
      <footer id="contact">
         

     <div className="row">

        <div className="twelve columns">
           <ul className="social-links">
           <center>
                <h3>Want to Know More ?</h3>
               <h4>Connect with me</h4>
               <br/>

               

    <a href="https://www.linkedin.com/in/jaidev-c-88552a112/">	<img src={l}  width="50" height="50"/> </a>
    <a href="https://www.twitter.com/jaidevchittoria">	<img src={t}  width="50" height="50"/> </a>
    <a href="https://www.instagram.com/jai.dev2">	<img src={i}  width="50" height="50"/> </a>
    <a href="https://www.github.com/jai2dev">	<img src={g}  width="50" height="50"/> </a>
    <a href="https://www.kaggle.com/jaidevchittoria">	<img src={k}  width="50" height="50"/> </a>
    </center>
              
           </ul>

           <ul className="copyright">
              <li>&copy;Copyright- JD | 2020 </li>
             
           </ul>

        </div>

        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><FontAwesomeIcon icon={faChevronUp} /></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;