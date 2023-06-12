
import { nanoid } from 'nanoid';
import ncr from './img/ncr.png';
import hale from './img/hale.png';



export default{ 
  experiences : [

    {
      id: nanoid(),
      img: ncr,
      title: "Software Engineer | NCR Corporation, India",
      info: "July '22-Present",
      info2: "Designed and developed APIs to strengthen the security of ATMs by providing dynamic data analysis of various operations performed using the ATMs manager application (NSP). Developing micro-services and working on improving the functionality of the ATMs manager application. Built an application collaboratively from scratch to provide automated testing to the ATMs manager application.",
      url:"https://www.ncr.com"
    },

    {
      id: nanoid(),
      img: hale,
      title: "Research Intern | Healthcare Anlaytics & Language Engineering Lab",
      info: "May '21-July '21",
      info2: "Developed machine learning models using novel machine learning approaches for the detection of cardiac arrhythmia using electrocardiogram records. The proposed approach beat many SOTA models on the basis of feature space and performance metrics.",
      url: "https://halelabnitk.github.io/index.html",
    }
  
],

}