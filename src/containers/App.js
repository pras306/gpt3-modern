import React from 'react';

import './App.css';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './';
import { Navbar, CTA, Brand } from '../components';

const App = () => {
  return (
    <div className='app'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;