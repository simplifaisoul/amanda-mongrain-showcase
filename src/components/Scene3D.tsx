import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingShape = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

export const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <mesh ref={meshRef}>
      <Sphere args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#ff6b9d"
          transparent
          opacity={0.4}
          distort={0.5}
          speed={1.5}
          roughness={0}
          metalness={0.5}
        />
      </Sphere>
    </mesh>
  );
};

export const Scene3DContent = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b9d" />
      
      <FloatingShape position={[-4, 2, -5]} scale={0.8} color="#1a2332" />
      <FloatingShape position={[4, -2, -3]} scale={1.2} color="#ff6b9d" />
      <FloatingShape position={[0, 3, -8]} scale={0.6} color="#2d3a4d" />
      <FloatingShape position={[-3, -3, -6]} scale={0.9} color="#ff8ab5" />
      
      <AnimatedSphere />
    </>
  );
};
