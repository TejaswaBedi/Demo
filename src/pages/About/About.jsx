import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import aboutimg from "../../images/about.svg"
import missionimg from "../../images/mission.svg"
import vissionimg from "../../images/vission.svg"

const About = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="main-div">
        <div className="about">
          <div>
            <img className="img" src={aboutimg} alt="aboutimg" />
            <p className="heading">About Us</p>
          </div>
          <div>
            <p className="content">
              RAAH is an online platform that connects alumni with students, providing a platform for mentorship, networking, and career development. <br /> Our goal is to facilitate meaningful relationships between our alumni and students, fostering a sense of community and shared experience. <br />

As an alumni of our college, you have a wealth of knowledge and experience that can be invaluable to our current students. <br />

For students, RAAH offers a unique opportunity to connect with successful professionals in their field of interest. <br /> Whether you're looking for advice on your career path, feedback on your resume or portfolio, or simply seeking guidance on navigating the job market, our mentors are here to help.

            </p>
          </div>
        </div>

        <div className="about">
          <div>
            <p className="content">
              Our mission is to create a one stop solution for placement and academic resources, all the necessary information, and support required under a single platform named as central repository. 
             <br /> The platform will enable students to easily access and share educational materials, connect with peers, and receive academic guidance from experts.
            </p>
          </div>

          <div>
            <img className="img" src={missionimg} alt="missionimg" />
            <p className="heading">Mission</p>
          </div>
        </div>

        <div className="about">
          <div>
            <img className="img" src={vissionimg} alt="vissionimg" />
            <p className="heading">Vision</p>
          </div>
          <div>
            <p className="content">
              Our vision is to empower students with the tools and resources they need to excel both professionally and academically to achieve their career goals. <br /> We envision a future where students can collaborate with each other and educators to create a dynamic learning environment that promotes growth and innovation. <br /> By providing a centralized platform for students, we hope to create a community of learners who are equipped to navigate the challenges of today's academic landscape and thrive in the workforce of tomorrow.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
