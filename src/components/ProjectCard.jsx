import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { Image, Text, MeshDistortMaterial } from '@react-three/drei';

export default function ProjectCard({ position, img, title, index }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (hovered) {
      // Subtle tilt following the mouse
      const x = (state.mouse.x * Math.PI) / 10;
      const y = (state.mouse.y * Math.PI) / 10;
      meshRef.current.rotation.set(-y, x, 0);
    } else {
      // Natural floating idle animation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.1;
    }
  });

  return (
    <motion.group 
      position={position}
      whileHover={{ scale: 1.1 }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh ref={meshRef}>
        <planeGeometry args={[3, 2]} />
        <Image url={img} transparent opacity={0.9} />
      </mesh>
      
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.2}
        color="white"
        font="/fonts/Geist-Bold.woff" // Optional: path to your font
      >
        {title.toUpperCase()}
      </Text>
    </motion.group>
  );
}