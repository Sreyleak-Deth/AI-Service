// AboutUs.js
import React from 'react';
import '../styles/About.css'; 
import CompanyImage from '../asset/computer-vision.png'; 

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2 className="about-us-heading">About Us</h2>
        <img src={CompanyImage} alt="Company" className="about-us-image" />
        <p className="about-us-text">
          Welcome to AI Service, your premier destination for cutting-edge artificial intelligence solutions. 
          We're on a mission to revolutionize the way businesses operate by harnessing the power of AI and machine learning.
        </p>
        <p className="about-us-text">
          At AI Service, we pride ourselves on delivering innovative AI technologies tailored to your specific needs. 
          Our team of experts consists of top-notch data scientists, engineers, and AI enthusiasts dedicated to staying 
          at the forefront of AI advancements.
        </p>
        <p className="about-us-text">
          Our commitment to excellence has led us to collaborate with industry leaders and startups alike. 
          Whether you need AI-powered automation, predictive analytics, or natural language processing, we've got you covered.
        </p>
        <p className="about-us-text">
          Join us in shaping the future with AI technology. Let's transform your vision into reality and drive 
          your business forward in the digital era.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
