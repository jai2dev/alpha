
import { nanoid } from 'nanoid';
import txtimage from './img/text.jpg';
import van from './img/van.jpg';
import routing from './img/routing.jpg';
import commerce from './img/commerce.jpg';
import stega from './img/stega.jpg';


export default{ 
  projects : [

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
    img: stega,
    title: "Image Steganalysis",
    info: "Python, Opencv, Pandas, Numpy, sklearn, keras, CNN, EDA",
    info2: "Using deep learning concepts, I built a convolutional neural network model that can detect hidden data in an image. The accuracy achieved was 90.6%.",
    url: "",
    repo: "https://github.com/jai2dev/Image-Steganalysis-Kaggle", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: van,
    title: "Kruskal’s Algorithm implementation with vEB tree and its comparison with AVL Tree",
    info: " Kruskal Algorithm, Van Embde Boas Trees, AVL Trees",
    info2: "Comparison of performance of Kruskal’s Minimum Spanning Tree algorithm with its implementation through van Emde Boas Tree and AVL tree with Union Find.",
    url: "",
    repo: "https://github.com/jai2dev/DAA-ArtGallery", // if no repo, the button will not show up
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