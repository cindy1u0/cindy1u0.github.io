import React from 'react';
import { Element } from 'react-scroll';
import './App.css';
import Footer from './components/footer';
import Layout from './components/layout';
import About from './pages/about';
import Experience from './pages/experience';
import Home from './pages/home';
import Photography from './pages/photography';
import Projects from './pages/projects';

function App(): JSX.Element {
  return (
    <Layout>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="photography">
        <Photography />
      </Element>
      <Footer />
    </Layout>
  );
}

export default App;
