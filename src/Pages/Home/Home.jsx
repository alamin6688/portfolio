import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Works from "../../Components/Works/Works";
import About from "../../Components/About/About";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <Works></Works>
        <About></About>
      </main>
    </div>
  );
};

export default Home;
