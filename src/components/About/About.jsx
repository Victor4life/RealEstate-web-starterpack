import React from "react";
import "./About.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="blob-bg" />
      <div className="about-container">
        <div className="about-content">
          <div className="about-heading">
            <div className="about-highlight" />
            <h2>About Awaholm Real Estate Company</h2>
          </div>
          <p className="about-text">
            Welcome to our real estate company! We are a team of dedicated
            professionals committed to helping you find your dream home or
            investment property. With years of experience in the industry, we
            have a deep understanding of the local market and can provide you
            with valuable insights and guidance throughout the entire process.
          </p>
          <p className="about-text">
            Our mission is to make the real estate journey as smooth and
            stress-free as possible for our clients. We pride ourselves on our
            exceptional customer service, attention to detail, and unwavering
            commitment to your satisfaction.
          </p>
        </div>
        <div className="about-images">
          <img src="./r1.png" alt="About Image 1" className="about-image-1" />
          <img src="./r2.png" alt="About Image 2" className="about-image-2" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
