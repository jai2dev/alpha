import React,{Component} from 'react'; 
import ParticlesBg from 'particles-bg';
import {useDencrypt} from "use-dencrypt-effect";

 

import './App.css';

const values=["Jaidev Chittoria","I am a Student"];


const App = () =>{

  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, []);


  return (
    <div>

  <h1 style={{textAlign:'center'}}>currently in maintainance</h1>
 
    <div className="App" id="1">
     
     <h2>{result}</h2>
     
    </div>

    <ParticlesBg type="cobweb" bg={true}/>

    </div>

    
    
  );
};

export default App;
// export default Example;
