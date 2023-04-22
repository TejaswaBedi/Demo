import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import homelogo from "../src/images/homelogo.svg";
import RaahLogo from "../src/images/RaahLogo.png";
import DataVerseLogo from "../src/images/DataVerseLogo.png";
import { Link } from 'react-router-dom';


function App() {
  return (
    
    <div className="Home">
      
    {/* <div className="background">
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>
      <div className="shape4"></div>
      <div className="shape5"></div>
    </div> */}

    <Navbar />
      <div className="Hero">

      <div className="HeroText">
          <p className="p1">Build</p>
          <br />
          <p className="p2">your <span>CAREER</span> </p>
          <br />
          <p className="p3">with Us</p>
          <Link to="/signup">
        <button>Join Now</button>
      </Link>
      </div>

      <div className="imglogo">
          <img className="homelogo" src={homelogo} alt="asd" />
      </div>
    </div>
    <div className="Tagline">
      <p>The Next Step Towards <span>SUCCESS</span> </p>
      
    </div>
    
    
    <div className="welcome">
      <h1>Welcome To</h1>
      <img className="welcomeimg" src={RaahLogo} alt="asd" />
    </div>

    <div className="raahdescription">
      <p>
        A revolutionary step, where we not only connect students but also create a huge impact on their skill set, <br /> provide them with the mentor's guidance and give them an exposure to the different companies. <br /> Reflecting on the company's scenario, skill level grading is given more preference <br /> as compared to having a high profile degree.
      </p>
    </div>
    
    <div className="poweredby">
      
        <img className="poweredby" src={DataVerseLogo} alt="dataverse" />
      <div className="poweredbytext">
        <h6>Developed and Powered by <br /> DataVerse | The Data Science Club of ABESEC</h6>
      </div>

    </div>

    <Footer/>
    </div>
  );
}


export default App;