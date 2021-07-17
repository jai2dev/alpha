import React from 'react'; 
import {useDencrypt} from "use-dencrypt-effect";
import Typist from 'react-typed';


 

import '../App.css';

const values=["Student","Developer"];


const Header = () =>{

  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, []);


  return (
    <header className="header" id="home">



    <nav id="nav-wrap">

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#skills">Skills</a></li>
             <li><a className="smoothscroll" href="#ho">Interests</a></li>
            <li><a className="smoothscroll" href="#projects">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

    {/* <h1 style={{textAlign:'center'}}>currently in maintainance</h1> */}
    

    <div id="boo">
    

    {/* <p>
    <Typical
        steps={[5000,'Hello', 1000, 'Welcome Traveller!']}
        loop={1}
        wrapper="p"
      />
      </p> */}

<br/>

    <div className="welcome" id="1">

    <Typist strings={["Hello","I am Jaidev","Jaidev Chittoria"]} typeSpeed={80} backDelay={1100} backSpeed={30}/>
    

      <br/>
      
      
        
        <p id="name" >I am a {result}</p>
        
     
     
     
    </div>

    </div>

    

    </header>

    
    
  );
};

export default Header;
// export default Example;
