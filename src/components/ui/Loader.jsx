import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

export function Loader() {
  const { active, progress: realProgress } = useProgress();
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (active) {
      const frame = requestAnimationFrame(() => {
        setProgress(realProgress);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [active, realProgress]);

  useEffect(() => {
    if (!active) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [active]);

  useEffect(() => {
    if (progress >= 100) {
      const frame = requestAnimationFrame(() => {
        setFadeOut(true);
      });
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 600);
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(timer);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="logo-spinner">
          <div className="spinner-ring ring-1"></div>
          <div className="spinner-ring ring-2"></div>
          <div className="logo-text">3D</div>
        </div>
        
        <h2>Initializing Studio</h2>
        <p className="loading-status">Compiling shaders and assets...</p>
        
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${Math.round(progress)}%` }}
          ></div>
        </div>
        
        <span className="progress-percentage">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}
