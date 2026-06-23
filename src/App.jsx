import { Suspense, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';
import { Room } from './components/canvas/Room';
import { Navigation } from './components/ui/Navigation';
import { Loader } from './components/ui/Loader';
import { Settings } from './components/ui/Settings';
import { getThemeById } from './config/themes';
import './App.css';

function App() {
  const location = useLocation();
  
  // Theme state
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'cyberpunk';
  });

  const currentTheme = getThemeById(themeId);

  // Sync theme with HTML data attribute and LocalStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('portfolio-theme', themeId);
  }, [themeId]);

  const handleThemeChange = (newThemeId) => {
    setThemeId(newThemeId);
  };

  return (
    <div className="app-container">
      {/* 3D CANVAS PORT */}
      <div className="canvas-wrapper">
        <Canvas
          shadows
          camera={{ position: [6, 5.5, 6], fov: 40 }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={[currentTheme.colors.bgDark]} />
          <fog attach="fog" args={[currentTheme.colors.bgDark, 8, 20]} />
          
          <Suspense fallback={null}>
            <Room theme={currentTheme} />
          </Suspense>
        </Canvas>
      </div>

      {/* 2D HTML OVERLAY ROUTED PAGES */}
      <div className="ui-overlay-layer">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>

        {/* SETTINGS PANEL (TOP RIGHT) */}
        <Settings currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      </div>

      {/* FLOATING NAVIGATION */}
      <Navigation />

      {/* PRELOADER SCREEN */}
      <Loader />
    </div>
  );
}

export default App;

