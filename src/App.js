import React, { Component } from 'react'; 


import Header from './Components/header';
import Footer from './Components/footer';
import About from './Components/about';
import Skills from './Components/skills';
import Projects from './Components/projects';
import ParticlesBg from 'particles-bg';
import Interests from './Components/interests';


 

import './App.css';
import Experience from './Components/experience';
import Publication from './Components/publications';
import Publications from './Components/publications';


class App extends Component {

  

 
  render() { 
    return (
      
    <div className='App'>
          

      <Header/>
      <About/>
      <Experience/>
      <Publications/>
      <Interests/>
      <Projects/>
      <Footer/>

      
      <ParticlesBg className="particle"  type="cobweb" bg={true}/>
      
    </div>

   
    
    
  
    
  );
  }
}

export default App;
// export default Example;
