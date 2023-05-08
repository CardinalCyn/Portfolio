"use client"
import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const Home = () => {

  return (
    <main className='bg-newBlack text-white'>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
};

export default Home;