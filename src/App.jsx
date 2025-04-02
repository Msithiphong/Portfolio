import React from "react";
import { StickyNavbar, Hero, Projects } from './components';

function App() {
  return (
    <>
      <div className="min-h-screen bg-colorpal-bg">
        <StickyNavbar /> 
        <Hero />
        <Projects />
      </div>
    </>
  );
}

export default App;
