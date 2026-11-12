import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

export default function InteractiveModel() {
  const meshRef = useRef();

  // Rotates the 3D model continuously
  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.2}>
        <MeshDistortMaterial 
          color="#66FCF1" 
          attach="material" 
          distort={0.5} 
          speed={2} 
          roughness={0.1} 
          metalness={0.9} 
        />
      </Sphere>
    </Float>
  );
}