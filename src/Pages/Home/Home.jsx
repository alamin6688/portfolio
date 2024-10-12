import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Works from "../../Components/Works/Works";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>
        <Works></Works>
        <Skills></Skills>
        <Contact></Contact>
      </main>
    </div>
  );
};

export default Home;
