import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { Suspense, useRef } from 'react';

const QuantumCore = () => {
  const coreRef = useRef();

  // Creates a fluid, mesmerizing continuous rotation
  useFrame((state, delta) => {
    coreRef.current.rotation.x += delta * 0.05;
    coreRef.current.rotation.y += delta * 0.08;
    coreRef.current.rotation.z -= delta * 0.02;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
      {/* Positioned deep in the Z-axis so it frames the screen perfectly */}
      <mesh ref={coreRef} position={[0, 0, -8]}>
        {/* TorusKnot geometry creates a complex, infinite overlapping loop */}
        <torusKnotGeometry args={[5, 0.08, 300, 20]} />
        <meshBasicMaterial 
          color="#66FCF1" 
          wireframe={true} 
          transparent={true} 
          opacity={0.2} 
        />
      </mesh>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-90">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          
          {/* Deep digital stardust creates massive depth behind the UI */}
          <Stars 
            radius={50} 
            depth={50} 
            count={3000} 
            factor={3} 
            saturation={0} 
            fade 
            speed={1.5} 
          />
          
          <QuantumCore />
          
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;