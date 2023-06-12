
import { nanoid } from 'nanoid';
import van from './img/van.jpg';
import routing from './img/routing.jpg';
import commerce from './img/commerce.jpg';
import stega from './img/stega.jpg';
import parkinson from './img/lol.png';
import secure from './img/secure.jpg';
import art from './img/art.jpg';
import road from './img/road.jpeg';


export default{ 
  projects : [

    {
      id: nanoid(),
      img: road,
      title: " Anomaly Detection in Road Traffic using Visual Surveillance",
      info: " Machine Learning, Deep Learning, Masking, Detectron, Python3, Video Processing",
      info2: "Developed an algorithm collaboratively to detect anomalous events related to vehicles in road traffic. Utilized the 'AI city challenge' dataset for training and testing purposes. The approach includes machine learning techniques with scene masking to reduce the incorrectly identified anomalies.",
      url: "",
      repo: "", // if no repo, the button will not show up
    },

    {
      id: nanoid(),
      img: parkinson,
      title: "Parkinson.ai",
      info: " Python3, ReactJS, Flask, Sklearn, Machine Learning",
      info2: "A web application that can predict whether the user has parkinson's disease or not using user's audio. Built using machine learning modules, reactjs and flask.",
      url: "https://www.parkinson-ai.tech/",
      repo: "https://github.com/jai2dev/parkinson.ai", // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: secure,
      title: "Secure File Transfer System",
      info: " Python3, Cloud, AES Algorithm, HTML, CSS",
      info2: "A cloud desktop web application using which you can transfer text files securely, include functionalities like adding, removing files on the public server, generating public-private keys. Diffie-hellman and AES algorithm were used for encryption and key exchange purpose.",
      url: "https://github.com/jai2dev/secure-transfer",
      repo: "https://github.com/jai2dev/secure-transfer", // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: commerce,
      title: "Home Essentials- An E-commerce Website",
      info: " HTML, CSS, Nodejs, Mongodb, Express",
      info2: "Built a working website with various functionality like authentication for login, mail validation after registration, search products, adding and removing products etc.",
      url: "https://home-essentials-web.herokuapp.com/",
      repo: "https://github.com/jai2dev/home-essentials-eCommerce-website", // if no repo, the button will not show up
    },

    {
      id: nanoid(),
      img: art,
      title: " Implementation of Art Gallery Problem",
      info: " Python, Algorithms, Data Structures, Computation Geometry",
      info2: "Developed an algorithm that can minimize the number of guards who can keep a check on the whole art gallery.",
      url: "",
      repo: "https://github.com/jai2dev/DAA-ArtGallery"  // if no repo, the button will not show up
    },

  {
    id: nanoid(),
    img: stega,
    title: "Image Steganalysis",
    info: "Python, Opencv, Pandas, Numpy, sklearn, keras, CNN, EDA",
    info2: "Using deep learning concepts, built a convolutional neural network model that can detect hidden data in an image. The accuracy achieved was 90.6%.",
    url: "",
    repo: "https://github.com/jai2dev/Image-Steganalysis-Kaggle", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: van,
    title: "vEB tree versus AVL Tree via Kruskal’s Algorithm",
    info: " C++, Kruskal Algorithm, Van Embde Boas Trees, AVL Trees",
    info2: "Comparison of performance of Kruskal’s Minimum Spanning Tree algorithm with its implementation through van Emde Boas Tree and AVL tree with Union Find.",
    url: "",
    repo: "https://github.com/jai2dev/Kruskal-Implementation-using-avl-and-VEB-trees", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: routing,
    title: "Capacitated Vehicle Routing Problem using Time windows",
    info: " Python, Pandas, Numpy, Kmeans clustering algorithm",
    info2: "Built a program that can minimise the cost of servicing orders using vehicles with time constraint and without exceeding the vehicle’s capacity using k-means clustering algorithm.",
    url: "",
    repo: "https://github.com/jai2dev/dsa-project-vrp", // if no repo, the button will not show up
  },
  
],

}