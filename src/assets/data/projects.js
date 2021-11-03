import { v4 as uuidv4 } from 'uuid';
import BankingSys from '../images/banking.jpg';
import CMS from '../images/cms.JPG';
import driverAuth from '../images/driver.jpg';
import analysisPopulation from '../images/analysis.jpg';
import RecomSys from '../images/recom.png';
import vehicleAnalysis from '../images/vehicleAnalysis.jpg';
import tableau from '../images/tableau.JPG'
const projects = [
  {
    id: uuidv4(),
    name: 'Analysis on population of India ',
    desc:
      'Web Scraping and Visualization using Plotly on Population of India. The project involved data assessment, cleaning, performing EDA and drawing conclusions. Technologies Used are Python, Numpy, Pandas, Plotly,Jupyter Notebook',
    img: analysisPopulation,
    link:'https://github.com/Vaishnavi-Aswale/Analysis-on-Population-of-India'
  },
  {
    id: uuidv4(),
    name: "Tableau Data Visualization",
    desc:
      'Visual representation of data using Tableau. Scatter plots, Gantt charts, histograms, bullet charts for visualising . Dual layer maps for geographic data. Created dashboard using a parameter as KPI ',
    img: tableau,
    link:'https://public.tableau.com/app/profile/vaishnavi3737'
  },
  {
    id: uuidv4(),
    name: 'Driver Authentication System',
    desc:
      'IoT based project built using Raspberry pi and python.The driver after entering the vehicle will need to present his License in the device,then it will ask to confirm your Biometrics.After the biometrics are confirmed the vehicle will start and entry will be created in our database.',
    img: driverAuth,
    link:'https://github.com/Vaishnavi-Aswale/Driver_Authentication_System'
  },
  {
    id: uuidv4(),
    name: 'Content Management System',
    desc:
      'A Blogging system built using PHP where the published blogs can be seen on the home page. New users can create their account to start writing blogs. Dashboard is created where Admin can view posts,comments. All the CRUD operations can be performed.',
    img: CMS,
    link:'https://github.com/Vaishnavi-Aswale/CMS-using-PHP'
  },
  {
    id: uuidv4(),
    name: 'Vehicle Data Analysis ',
    desc:
      'Data Analysis on various parameters of vehicles to predict the which attributes determine price of vehicle.It includes steps such as Data Collection,Data Wrangling, Exploratory Data Analysis,Model Development,Model Evaluation and refinement ',
    img: vehicleAnalysis,
    link:'https://github.com/Vaishnavi-Aswale/Data-Analysis-Vehicles'
  },
  {
    id: uuidv4(),
    name: "Recommendation System",
    desc:
      'Recommending movies to user according to content based or collaboartive filtering Recommendation systems are a collection of algorithms used to recommend items to users based on information taken from the user',
    img: RecomSys,
    link:'https://github.com/Vaishnavi-Aswale/Recommendation-System'
  },
  {
    id: uuidv4(),
    name: 'Banking-System',
    desc:
      'A bank management system created using python. This application allows users to:Create a new account,Withdraw,Deposit ,Check account details,Close an account,Modify account,List all account holders      ',
    img: BankingSys,
    link:'https://github.com/Vaishnavi-Aswale/Banking-System'
  },
];

export default projects;
