import React from "react";
import Head from "next/head";
import { Element } from "react-scroll";
import Navbar from "../components/Navbar.js";
import MainHome from "../components/mainhome.js";
import Home from "../components/home.js";
import Experience from "../components/Experience.js";
import Projects from "../components/projects.js";
import Footer from "../components/contact.js";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Jaideep Singh | Software Developer</title>
        <meta
          name="description"
          content="Portfolio of Jaideep Singh — software developer, IT ops engineer, and CS grad from Simon Fraser University. Based in Vancouver."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>
        <Element name="mainhome">
          <MainHome />
        </Element>
        <Element name="home">
          <Home />
        </Element>
        <Element name="work">
          <Experience />
        </Element>
        <Element name="Projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Footer />
        </Element>
      </main>
    </>
  );
};

export default Homepage;
