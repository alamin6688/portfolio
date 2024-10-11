import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Works from "../../Components/Works/Works";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <Works></Works>
      </main>
    </div>
  );
};

export default Home;
