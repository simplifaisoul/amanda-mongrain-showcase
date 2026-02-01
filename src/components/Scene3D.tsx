import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingShape = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.3}
          distort={0.3}
          speed={1}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
};

export const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <mesh ref={meshRef}>
      <Sphere args={[2, 32, 32]}>
        <MeshDistortMaterial
          color="#c76a9f"
          transparent
          opacity={0.2}
          distort={0.3}
          speed={1}
          roughness={0.1}
          metalness={0.4}
        />
      </Sphere>
    </mesh>
  );
};

export const Scene3DContent = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#c76a9f" />
      
      <FloatingShape position={[-4, 2, -5]} scale={0.6} color="#1a1a2e" />
      <FloatingShape position={[4, -2, -3]} scale={0.8} color="#c76a9f" />
      <FloatingShape position={[0, 3, -8]} scale={0.5} color="#2d2d44" />
      
      <AnimatedSphere />
    </>
  );
};
