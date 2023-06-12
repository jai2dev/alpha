import React from 'react'; 
import {useDencrypt} from "use-dencrypt-effect";
import Typist from 'react-typed';
import '../App.css';

const values=["I am a Software Engineer","I am an Artist"];


const Header = () =>{

  const { result, dencrypt } = useDencrypt();
  
  React.useEffect(() => {
    let i = 0;
    let action;
    setTimeout(()=>{
    action = setInterval(() => {dencrypt(values[i]);i = i === values.length - 1 ? 0 : i + 1;}, 4000);
    },20000);
    // const action = setInterval(() => {dencrypt(values[i]);i = i === values.length - 1 ? 0 : i + 1;}, 4000);
    return () => clearInterval(action);
  }, []);

  // const [value, setvalue] = React.useState("initial");
  // const [counter, setcounter] = React.useState(0);

  // React.useEffect(() => {
  //   let timer;
  //   setTimeout(() => {
  //     setvalue("delayed value");
  //     timer = setInterval(() => {
  //       setcounter(c => c + 1);
  //     }, 1000);
  //   }, 2000);
  //   return () => clearInterval(timer);
  // }, []);  

  return (
    <header className="header" id="home">
    <nav id="nav-wrap">

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#experiences">Experience</a></li>
            <li><a className="smoothscroll" href="#publications">Publications</a></li>
	         <li><a className="smoothscroll" href="#interests">Skills</a></li>
            <li><a className="smoothscroll" href="#projects">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>
    <div id="boo">

<br/>
    <div className="welcome" id="1">
    <Typist strings={["Hello Human","Glad to see you here"," wondering who am I?","I am Iron Man","just kidding","I am Jaidev","Jaidev Chittoria"]} typeSpeed={80} backDelay={1100} backSpeed={30}/>
      <br/>

        <p id="name" >{result}.</p>
        
    </div>

    </div>

    

    </header>

    
    
  );
};

export default Header;
// export default Example;
