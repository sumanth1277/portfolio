import { Canvas } from '@react-three/fiber';
import BackgroundWaves from './BackgroundWaves';

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[#030014]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <BackgroundWaves />
        {/* Your other 3D objects go here */}
      </Canvas>
    </div>
  );
}