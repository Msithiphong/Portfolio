import React from "react";
import { StickyNavbar, Hero, Projects } from './components';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-colorpal-bg">
        <StickyNavbar />
        <Hero />
        <Projects />
      </div>
    </ErrorBoundary>
  );
}

export default App;
