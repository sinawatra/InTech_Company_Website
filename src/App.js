import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Solutions from './components/Solutions';
import CallToAction from './components/CallToAction';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Solutions />
      <CallToAction />
      <About />
      <Footer />
    </div>
  );
}

export default App;
