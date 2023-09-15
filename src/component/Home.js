import React from 'react';
import '../styles/Home.css'; // Create a new CSS file for home screen styles

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to AI Services</h1>
        <p>Your Trusted Partner in AI Solutions</p>
        <button>Get Started</button>
      </header>

      <section className="featured-services">
        <h2>Featured Services</h2>
        {/* Add featured AI services or cards here */}
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          sem in odio cursus scelerisque id eget ex.
        </p>
      </section>

      {/* Add more sections as needed, e.g., testimonials, contact, etc. */}
    </div>
  );
}

export default Home;
