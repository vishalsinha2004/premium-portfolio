import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

export default function InteractiveModel() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = clock.getElapsedTime() * 0.18;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.25;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
      <group ref={groupRef} scale={2}>
        {/* Solid Matte Obsidian Core */}
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#0A0A0A"
            roughness={0.3}
            metalness={0.8}
            flatShading={true}
          />
        </mesh>

        {/* Acid Lime Architectural Wireframe */}
        <mesh scale={1.02}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#D4FF00"
            wireframe={true}
            transparent={true}
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
}