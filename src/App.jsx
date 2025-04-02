import { StickyNavbar } from './components/StickyNavbar';
import './index.css'

function App() {
  return (
    <>
      <StickyNavbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-10 border border-white/30 shadow-lg text-white">
          <h1 className="text-3xl font-semibold">
            Maxwell Sithiphong's Portfolio Website
          </h1>
          <p className="text-sm mt-2">
            Looks frosty ❄️
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
