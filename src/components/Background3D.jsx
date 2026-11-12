import { Canvas } from '@react-three/fiber';
import { Sparkles, Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]} performance={{ min: 0.5 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            {/* Deep background cyan particles */}
            <Sparkles 
              count={200} 
              scale={20} 
              size={4} 
              speed={0.2} 
              opacity={0.3} 
              color="#66FCF1" 
            />
            {/* Foreground muted teal particles */}
            <Sparkles 
              count={100} 
              scale={15} 
              size={6} 
              speed={0.4} 
              opacity={0.5} 
              color="#45A29E" 
            />
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;