import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene3DContent } from './Scene3D';
import { ParticleField } from './ParticleField';

export const Hero3DBackground = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [error, setError] = useState(false);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    // Check if WebGL is available and set appropriate DPR for performance
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
      // Cap DPR at 2 for performance on retina displays (MacBook Pro)
      setDpr(Math.min(window.devicePixelRatio, 2));
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL || error) {
    // Fallback gradient background - professional and subtle
    return (
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5" />
      
      <Suspense fallback={
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        </div>
      }>
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 50 }}
          dpr={dpr}
          onCreated={() => {
            console.log('WebGL context created successfully');
          }}
          onError={() => {
            setError(true);
            console.warn('WebGL context failed, using fallback');
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false
          }}
          style={{ pointerEvents: 'none' }}
        >
          <Scene3DContent />
          <ParticleField />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.3} 
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={Math.PI / 2} 
          />
        </Canvas>
      </Suspense>
    </div>
  );
};