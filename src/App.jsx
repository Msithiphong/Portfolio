import React from "react";
import { StickyNavbar } from './components/StickyNavbar';
import './index.css';

function App() {
  return (
    <>
      <div className="min-h-screen bg-colorpal-bg">
        <StickyNavbar /> {/* StickyNavbar is rendered here */}
        <div className="flex items-center justify-center min-h-screen">
          {/* Hero section */}
          <div className="bg-colorpal-bg backdrop-blur-md rounded-xl p-10 border border-white/30 shadow-lg text-colorpal-text">
            <h1 className="text-3xl font-semibold">
              Maxwell Sithiphong's Portfolio Website
            </h1>
            <span className="text-sm mt-2 text-colorpal-accent">
              Looks frosty ❄️
            </span>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
