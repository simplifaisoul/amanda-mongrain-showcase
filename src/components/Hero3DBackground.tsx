import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene3DContent } from './Scene3D';
import { ParticleField } from './ParticleField';
export const Hero3DBackground = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    // Check if WebGL is available
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);
  if (!hasWebGL || error) {
    // Fallback gradient background
    return <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-30 border-secondary">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }} />
        </div>
      </div>;
  }
  return <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background">
      <Suspense fallback={<div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        </div>}>
        <Canvas camera={{
        position: [0, 0, 10],
        fov: 50
      }} onCreated={state => {
        // Successfully created, ensure no errors
        console.log('WebGL context created successfully');
      }} onError={() => {
        setError(true);
        console.warn('WebGL context failed, using fallback');
      }} gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      }}>
          <Scene3DContent />
          <ParticleField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </Canvas>
      </Suspense>
    </div>;
};