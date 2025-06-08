import { v4 as uuidv4 } from 'uuid';
import CMS from '../images/cms.JPG';
import realEstate from '../images/real-estate.png';
import chatApp from '../images/chat.jpg';
import shopVerse from '../images/ecommerce.jpg';
import driverAuth from '../images/driver.jpg';
import analysisPopulation from '../images/analysis.jpg';
import RecomSys from '../images/recom.png';
import vehicleAnalysis from '../images/vehicleAnalysis.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Real Estate Pro ',
    desc: 'A full-featured real estate platform built with the MERN stack that enables users to browse, list, and manage property listings. Includes interactive maps, image galleries, advanced search filters, secure JWT-based authentication, and real-time chat powered by Socket.io.',
    img: realEstate,
    link:'https://github.com/Vaishnavi-Aswale/Real-Estate-Pro'
  },
  {
    id: uuidv4(),
    name: 'ShopVerse',
    desc: 'A scalable e-commerce backend system built with Spring Boot microservices and Docker, featuring an API Gateway, service registry, Kafka messaging, Redis caching, and Zipkin tracing, paired with a responsive React + TypeScript frontend UI.',
    img: shopVerse,
    link:'https://github.com/Vaishnavi-Aswale/ShopVerse-Dockerized-Microservices-E-Commerce'
  },
  {
    id: uuidv4(),
    name: 'Real-Time Chat App',
    desc: 'A real-time chat platform built with Spring Boot and React, enabling users to create chat rooms and exchange messages instantly using WebSocket (STOMP). The system supports scalable communication and a responsive UI powered by Vite and Tailwind CSS.',
    img: chatApp,
    link:'https://github.com/Vaishnavi-Aswale/Real-Time-Chat-Application'
  },
  {
    id: uuidv4(),
    name: 'Driver Authentication System',
    desc: 'An IoT-enabled smart vehicle authentication system using Raspberry Pi and Python that verifies a driver\'s license and biometrics before ignition, securely logging each access event to a centralized database.',
    img: driverAuth,
    link:'https://github.com/Vaishnavi-Aswale/Driver_Authentication_System'
  },
  {
    id: uuidv4(),
    name: 'Content Management System',
    desc: 'A Blogging system built using PHP where the published blogs can be seen on the home page. New users can create their account to start writing blogs. Dashboard is created where Admin can view posts,comments. All the CRUD operations can be performed.',
    img: CMS,
    link:'https://github.com/Vaishnavi-Aswale/CMS-using-PHP'
  },
  {
    id: uuidv4(),
    name: 'Analysis on population of India ',
    desc: 'Web Scraping and Visualization using Plotly on Population of India. The project involved data assessment, cleaning, performing EDA and drawing conclusions. Technologies Used are Python, Numpy, Pandas, Plotly,Jupyter Notebook',
    img: analysisPopulation,
    link:'https://github.com/Vaishnavi-Aswale/Analysis-on-Population-of-India'
  },
  {
    id: uuidv4(),
    name: 'Vehicle Data Analysis ',
    desc: 'Data Analysis on various parameters of vehicles to predict the which attributes determine price of vehicle.It includes steps such as Data Collection,Data Wrangling, Exploratory Data Analysis,Model Development,Model Evaluation and refinement ',
    img: vehicleAnalysis,
    link:'https://github.com/Vaishnavi-Aswale/Data-Analysis-Vehicles'
  },
  {
    id: uuidv4(),
    name: "Recommendation System",
    desc: 'Recommending movies to user according to content based or collaboartive filtering Recommendation systems are a collection of algorithms used to recommend items to users based on information taken from the user',
    img: RecomSys,
    link:'https://github.com/Vaishnavi-Aswale/Recommendation-System'
  },
];

export default projects;
