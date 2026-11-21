import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';

const ArchitecturalWireframe = () => {
  const coreRef = useRef();

  useFrame((_, delta) => {
    if (!coreRef.current) return;
    coreRef.current.rotation.x += delta * 0.04;
    coreRef.current.rotation.y += delta * 0.06;
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={coreRef} position={[3, 0, -9]}>
        <torusKnotGeometry args={[4.5, 0.06, 220, 16]} />
        <meshBasicMaterial
          color="#D4FF00"
          wireframe={true}
          transparent={true}
          opacity={0.08}
        />
      </mesh>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ArchitecturalWireframe />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;