import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Companies from "../components/companies/Companies";
import Residencies from "../components/residencies/Residencies";
import Value from "../components/value/Value";
import ContactUs from "../components/contactUs/ContactUs";
import GetStarted from "../components/getStarted/GetStarted";
import Gallery from "../components/gallery/Gallery";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";
import "../App.css";

const Home = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <About />
      <Companies />
      <GetStarted />
      <Gallery />
      <Residencies />
      <GetStarted />
      <Value />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default Home;
