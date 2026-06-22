import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';
import { Room } from './components/canvas/Room';
import { Navigation } from './components/ui/Navigation';
import { Loader } from './components/ui/Loader';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* 3D CANVAS PORT */}
      <div className="canvas-wrapper">
        <Canvas
          shadows
          camera={{ position: [6, 5.5, 6], fov: 40 }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={['#0e0f14']} />
          <fog attach="fog" args={['#0e0f14', 8, 20]} />
          
          <Suspense fallback={null}>
            <Room />
          </Suspense>
        </Canvas>
      </div>

      {/* 2D HTML OVERLAY ROUTED PAGES */}
      <div className="ui-overlay-layer">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>

      {/* FLOATING NAVIGATION */}
      <Navigation />

      {/* PRELOADER SCREEN */}
      <Loader />
    </div>
  );
}

export default App;
